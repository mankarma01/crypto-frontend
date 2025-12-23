import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/api";

/* ===================== STEPPER ===================== */

const steps = ["거래소", "엔트리 시드", "레버리지", "거래 횟수", "결과"];

function Stepper({ activeStep }) {
  return (
    <div className="flex justify-center text-sm mb-8 mt-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <span className={index <= activeStep ? "text-pink-500" : "text-gray-400"}>
            {step}
          </span>
          {index < steps.length - 1 && <span className="mx-3">—</span>}
        </div>
      ))}
    </div>
  );
}

function Layout({ activeStep, children }) {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-4xl w-full px-6 py-10">
        <Stepper activeStep={activeStep} />
        {children}
      </div>
    </div>
  );
}

/* ===================== PAGES ===================== */

function ExchangePage({ formData, setFormData }) {
  const navigate = useNavigate();

  const exchanges = [
    { id: "bitget", name: "Bitget" },
    { id: "bingx", name: "BingX" },
    { id: "bybit", name: "Bybit" },
    { id: "okx", name: "OKX" },
  ];

  return (
    <Layout activeStep={0}>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {exchanges.map((ex) => (
          <button
            key={ex.id}
            onClick={() =>
              setFormData({ ...formData, exchange_name: ex.id })
            }
            className={`border p-4 rounded ${
              formData.exchange_name === ex.id
                ? "border-pink-500 text-pink-500"
                : "text-gray-400"
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      <button
        disabled={!formData.exchange_name}
        onClick={() => navigate("entry-seed")}
        className="w-full py-3 bg-pink-500 text-white rounded"
      >
        다음
      </button>
    </Layout>
  );
}

function EntrySeedPage({ formData, setFormData }) {
  const navigate = useNavigate();

  return (
    <Layout activeStep={1}>
      <input
        type="number"
        value={formData.entry_speed}
        onChange={(e) =>
          setFormData({ ...formData, entry_speed: e.target.value })
        }
        className="border p-3 w-full mb-4"
        placeholder="USDT"
      />

      <button
        disabled={!formData.entry_speed}
        onClick={() => navigate("/getting-started/leverage")}
        className="w-full py-3 bg-pink-500 text-white rounded"
      >
        다음
      </button>
    </Layout>
  );
}

function LeveragePage({ formData, setFormData }) {
  const navigate = useNavigate();
  const isValid = formData.usually_use >= 1 && formData.usually_use <= 125;

  return (
    <Layout activeStep={2}>
      <input
        type="number"
        value={formData.usually_use}
        onChange={(e) =>
          setFormData({ ...formData, usually_use: e.target.value })
        }
        className="border p-3 w-full mb-4"
      />

      <button
        disabled={!isValid}
        onClick={() => navigate("/getting-started/transactions")}
        className="w-full py-3 bg-pink-500 text-white rounded"
      >
        다음
      </button>
    </Layout>
  );
}

function TransactionsPage({ formData, setFormData }) {
  const navigate = useNavigate();

const options = [
  { label: "0–1 times a day", value: 1 },
  { label: "1–2 times a day", value: 2 },
  { label: "2–5 times a day", value: 5 },
  { label: "5–10 times a day", value: 10 },
];

  return (
    <Layout activeStep={3}>
      <div className="grid grid-cols-2 gap-4 mb-6">
       {options.map((opt) => (
  <button
    key={opt.value}
    onClick={() =>
      setFormData({ ...formData, trades_per_day: opt.value }) // store number
    }
    className={`border p-3 rounded ${
      formData.trades_per_day === opt.value
        ? "bg-pink-500 text-white"
        : "text-gray-400"
    }`}
  >
    {opt.label}
  </button>
))}

      </div>

      <button
        disabled={!formData.trades_per_day}
        onClick={() => navigate("/getting-started/result")}
        className="w-full py-3 bg-pink-500 text-white rounded"
      >
        다음
      </button>
    </Layout>
  );
}

/* ===================== RESULT + API ===================== */

function ResultPage({ formData }) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        setLoading(true);

        const response = await api.post(
          "/api/refund/test",
          formData
        );
       console.log(response.data);
        if (response.data?.success) {
          setResult(response.data);
        } else {
          setError("계산에 실패했습니다.");
        }
      } catch (err) {
        console.error("API ERROR:", err);
        setError("서버 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, []);

  return (
    <Layout activeStep={4}>
      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg">
          수수료 환급 금액 계산 중...
        </p>
      )}

      {/* ERROR */}
      {!loading && error && (
        <p className="text-center text-red-500 text-lg">
          {error}
        </p>
      )}

      {/* SUCCESS RESULT */}
      {!loading && result && (
        <div className="max-w-md mx-auto bg-white border rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold text-center mb-6">
            계산 결과
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">거래소</span>
              <span className="font-medium">
                {result.input.exchange_name}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">엔트리 시드</span>
              <span className="font-medium">
                {result.input.entry_speed} USDT
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">레버리지</span>
              <span className="font-medium">
                x{result.input.usually_use}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">일일 거래 횟수</span>
              <span className="font-medium">
                {result.input.trades_per_day}
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-lg">
              <span className="font-semibold">예상 수수료</span>
              <span className="font-bold text-gray-700">
               {Number(result.calculation.estimated_fee).toFixed(2)} USDT

              </span>
            </div>

            <div className="flex justify-between text-lg">
              <span className="font-semibold text-pink-600">
                예상 환급 금액
              </span>
              <span className="font-bold text-pink-600">
               {Number(result.calculation.estimated_refund).toFixed(2)} USDT

              </span>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

/* ===================== FLOW ===================== */

export default function ExchangeFlow() {
  const [formData, setFormData] = useState({
    exchange_name: "",
    entry_speed: "",
    usually_use: "",
    trades_per_day: "",
  });

  return (
    <Routes>
      <Route index element={<ExchangePage formData={formData} setFormData={setFormData} />} />
      <Route path="entry-seed" element={<EntrySeedPage formData={formData} setFormData={setFormData} />} />
      <Route path="leverage" element={<LeveragePage formData={formData} setFormData={setFormData} />} />
      <Route path="transactions" element={<TransactionsPage formData={formData} setFormData={setFormData} />} />
      <Route path="result" element={<ResultPage formData={formData} />} />
    </Routes>
  );
}
