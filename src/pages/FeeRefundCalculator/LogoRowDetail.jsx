import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

export default function LogoRowDetail() {
  const { id } = useParams();
  const [exchange, setExchange] = useState(null);
  const [loading, setLoading] = useState(true);

  // refs for scrolling
  const refundPolicyRef = useRef(null);
  const refundCalcRef = useRef(null);
  const refundCheckRef = useRef(null);
  const eventRef = useRef(null);
  const consultRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const res = await api.post("/api/exchange/details", {
          exchange_id: id,
        });

        if (res.data?.success) {
          setExchange(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching exchange details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchange();
  }, [id]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!exchange) return <div className="text-center py-16">No details found.</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-32">

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-7 flex-wrap">
        <button
          className="px-3 py-2 border rounded"
          onClick={() => scrollToSection(refundPolicyRef)}
        >
          환급정책
        </button>

        <button
          className="px-3 py-2 rounded bg-pink-500 text-white font-semibold"
          onClick={() => scrollToSection(refundCalcRef)}
        >
          환급액 계산
        </button>

        <button
          className="px-3 py-2 border rounded"
          onClick={() => scrollToSection(refundCheckRef)}
        >
          환급 확인방법
        </button>

        <button
          className="px-3 py-2 border rounded"
          onClick={() => scrollToSection(eventRef)}
        >
          이벤트
        </button>

        <button
          className="px-3 py-2 border rounded"
          onClick={() => scrollToSection(consultRef)}
        >
          상담
        </button>
      </div>

      {/* ================= 환급 정책 ================= */}
      <div ref={refundPolicyRef} className="mb-10">
        <h1 className="font-semibold text-lg mb-4">
          {exchange.exchange_name} 환급 정책
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border rounded p-4">
          <div>
            <div className="font-semibold mb-1">환급 자산</div>
            <div>{exchange.currency}</div>
          </div>

          <div>
            <div className="font-semibold mb-1">환급률</div>
            <div className="text-pink-500 font-bold">
              {exchange.cashback_percentage}%
            </div>
          </div>

          <div>
            <div className="font-semibold mb-1">커미션</div>
            <div>
              {exchange.commission_type === "percentage"
                ? `${exchange.commission_value}%`
                : exchange.commission_value}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-1">최소 출금</div>
            <div>
              {exchange.min_withdraw_amount} {exchange.currency}
            </div>
          </div>
        </div>
      </div>

      {/* ================= 환급액 계산 ================= */}
      <div ref={refundCalcRef} className="mb-10">
        <h2 className="text-xl font-bold mb-3">환급액 계산</h2>
        <p>거래 금액과 환급률을 기준으로 환급액이 계산됩니다.</p>
      </div>

      {/* ================= 환급 확인 방법 ================= */}
      <div ref={refundCheckRef} className="mb-10">
        <h2 className="text-xl font-bold mb-3">환급 확인방법</h2>
        <p>마이페이지에서 환급 내역을 확인할 수 있습니다.</p>
      </div>

      {/* ================= 이벤트 ================= */}
      <div ref={eventRef} className="mb-10">
        <h2 className="text-xl font-bold mb-3">이벤트</h2>
        <p>진행 중인 이벤트를 확인하세요.</p>
      </div>

      {/* ================= 상담 ================= */}
      <div ref={consultRef} className="mb-10">
        <h2 className="text-xl font-bold mb-3">상담</h2>
        <p>문의 사항이 있으면 상담을 요청해주세요.</p>
      </div>

    </div>
  );
}
