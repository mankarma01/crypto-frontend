import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const steps = [
  "거래소",
  "엔트리 시드",
  "레버리지",
  "거래 횟수",
  "결과",
];

function Stepper({ activeStep }) {
  const steps = ["거래소", "엔트리 시드", "레버리지", "거래 횟수", "결과"];

  return (
    <div className="flex items-center justify-center text-sm mb-8 whitespace-nowrap overflow-x-auto mt-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <span
            className={`font-medium ${
              index <= activeStep ? "text-pink-500" : "text-gray-400"
            }`}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <span
              className={`mx-3 ${
                index < activeStep ? "text-pink-500" : "text-gray-300"
              }`}
            >
              —
            </span>
          )}
        </div>
      ))}
    </div>
  );
}


function Layout({ activeStep, children }) {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-4xl px-6 py-10">
        <Stepper activeStep={activeStep} />

        <div className="text-center mb-30">
          <h2 className="text-xl font-semibold">CryptoExchange</h2>
          <div className="w-35 h-[1px] bg-blue-950 mx-auto mt-2" />
        </div>

        {children}
      </div>
    </div>
  );
}

function ExchangePage() {
  const navigate = useNavigate();
  const [exchange, setExchange] = useState(null);

  const exchanges = [
    { id: "bitget", name: "Bitget" },
    { id: "bingx", name: "BingX" },
    { id: "bybit", name: "Bybit" },
    { id: "okx", name: "OKX" },
  ];

  return (
    <Layout activeStep={0}>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Which exchange do you mainly use?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {exchanges.map((item) => (
          <button
            key={item.id}
            onClick={() => setExchange(item.id)}
            className={`border rounded-xl p-6 ${
              exchange === item.id
                ? "border-pink-500 text-pink-500"
                : "border-gray-200 text-gray-400"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <button
        disabled={!exchange}
        onClick={() => navigate("entry-seed")}
        className={`w-full py-4 rounded-xl font-semibold ${
          exchange
            ? "bg-pink-500 text-white"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
       다음
      </button>
    </Layout>
  );
}

function EntrySeedPage() {
  const navigate = useNavigate();
  const [seed, setSeed] = useState("");

  return (
    <Layout activeStep={1}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">
          통상 진입하는 시드는 어느정도 입니까?
        </h1>

        <input
          type="number"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          className="w-96 border p-4 mb-6 text-center"
          placeholder="0 USDT"
        />

        <button
          disabled={!seed}
          onClick={() => navigate("/getting-started/leverage")}
          className={`w-96 py-4 rounded-xl font-semibold ${
            seed
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          다음
        </button>
      </div>
    </Layout>
  );
}


function LeveragePage() {
  const navigate = useNavigate();
  const [leverage, setLeverage] = useState("");

  const isValid = leverage >= 1 && leverage <= 125;

  return (
    <Layout activeStep={2}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">
          주로 사용하는 레버리지는 어느정도 입니까?
        </h1>

        <input
          type="number"
          value={leverage}
          onChange={(e) => setLeverage(e.target.value)}
          className="w-96 border p-4 mb-3 text-center"
          placeholder="1부터 125까지만 입력할 수 있습니다."
        />

        {!isValid && leverage && (
          <p className="text-red-500 text-sm mb-3">
            1부터 125까지만 입력할 수 있습니다.
          </p>
        )}

        <button
          disabled={!isValid}
          onClick={() => navigate("/getting-started/transactions")}
          className={`w-96 py-4 rounded-xl font-semibold ${
            isValid
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          다음
        </button>
      </div>
    </Layout>
  );
}

function TransactionsPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState("");

  const options = [
    "0-1 times a day",
    "1-2 times a day",
    "2 to 5 times a day",
    "5 to 10 times a day",
  ];

  return (
    <Layout activeStep={3}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">
          하루에 몇 번 정도 거래하십니까?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-96">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setCount(option)}
              className={`border rounded-xl py-4 font-medium ${
                count === option
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          disabled={!count}
          onClick={() => navigate("/getting-started/result")}
          className={`w-96 py-4 rounded-xl font-semibold ${
            count
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          다음
        </button>
      </div>
    </Layout>
  );
}


function ResultPage() {
  return (
    <Layout activeStep={4}>
      
      <p className="text-center mt-4 text-lg">
        수수료 환급 금액 계산 중...
      </p>
    </Layout>
  );
}


export default function ExchangeFlow() {
  return (
    <Routes>
      <Route index element={<ExchangePage />} />
      <Route path="entry-seed" element={<EntrySeedPage />} />
      <Route path="leverage" element={<LeveragePage />} />
      <Route path="transactions" element={<TransactionsPage />} />
      <Route path="result" element={<ResultPage />} />
    </Routes>
  );
}
