import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import Loader from "../../pages/Loader";

export default function LogoRowDetail() {
  const { id } = useParams();

  const [exchange, setExchange] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const refundPolicyRef = useRef(null);
  const startRef = useRef(null);
  const eventRef = useRef(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Fetch exchange details
        const exchangeRes = await api.post("/api/exchange/details", {
          exchange_id: id,
        });

        if (exchangeRes.data?.success) {
          setExchange(exchangeRes.data.data);
        }

        // Fetch events
        const eventRes = await api.get(
          `/api/exchange/events?exchange_id=${id}`
        );

        if (eventRes.data?.success) {
          setEvents(eventRes.data.data || []);
        }
      } catch (err) {
        console.error("LogoRowDetail error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [id]);

  if (loading) return <Loader loading />;
  if (!exchange)
    return <div className="text-center py-20">데이터를 불러올 수 없습니다.</div>;

  const logoUrl = exchange.logo
    ? `${BASE_URL}/uploads/${encodeURIComponent(exchange.logo)}`
    : "/logos/bitcoin-btc-logo.png";

  return (
    <div className="max-w-4xl mx-auto mt-28 bg-white rounded-lg shadow">

      {/* ================= HERO ================= */}
      <div className="bg-linear-to-r from-indigo-900 to-purple-900 text-white p-10 rounded-t-lg">
        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={logoUrl}
            alt={exchange.exchange_name}
            className="w-20 h-20 bg-white rounded-full p-2 object-contain"
            onError={(e) => {
              e.currentTarget.src = "/logos/bitcoin-btc-logo.png";
            }}
          />
          <h1 className="text-3xl font-bold">
            {exchange.exchange_name}
          </h1>
          <p className="opacity-90">공식 수수료 환급 파트너</p>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex flex-wrap justify-center gap-3 p-6 border-b">
        <button className="tab-btn" onClick={() => scrollTo(refundPolicyRef)}>
          환급 정책
        </button>
        <button className="tab-btn active" onClick={() => scrollTo(startRef)}>
          환급액 계산
        </button>
        <button className="tab-btn">
          환급 확인 방법
        </button>
        <button className="tab-btn" onClick={() => scrollTo(eventRef)}>
          이벤트
        </button>
      </div>

      {/* ================= REFUND POLICY ================= */}
      <section ref={refundPolicyRef} className="p-8">
        <h2 className="text-xl font-bold mb-6">
          {exchange.exchange_name} 환급 정책
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <PolicyCard title="환급 자산" value={exchange.currency} />
          <PolicyCard
            title="환급률"
            value={`${exchange.cashback_percentage}%`}
            highlight
          />
          <PolicyCard
            title="수수료"
            value={
              exchange.commission_type === "percentage"
                ? `${exchange.commission_value}%`
                : exchange.commission_value
            }
          />
          <PolicyCard
            title="정산 시간"
            value="매일 오후 5시 (KST)"
          />
        </div>

        <a
          href={exchange.referral_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 w-full text-center bg-indigo-700 text-white py-3 rounded font-semibold hover:bg-indigo-800 transition"
        >
          {exchange.exchange_name} 가입하기
        </a>
      </section>

      {/* ================= START STEPS ================= */}
      <section ref={startRef} className="p-8 border-t">
        <h2 className="text-xl font-bold mb-6">
          이렇게 시작하세요
        </h2>

        <div className="space-y-6">
          <Step
            no="1"
            title="당사에서 제공하는 암호화폐 거래소 전용 링크를 통해 가입하세요."
            sub={`${exchange.exchange_name} 테더백 전용 링크`}
          />
          <Step
            no="2"
            title={`${exchange.exchange_name}에서 KYC 인증을 완료하세요.`}
          />
          <Step no="3" title="평소처럼 거래하세요." />
          <Step no="4" title="환급 금액을 지급받으세요." />
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section ref={eventRef} className="p-8 border-t">
        <h2 className="text-xl font-bold mb-6">
          {exchange.exchange_name} 이벤트
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            진행 중인 이벤트가 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

// Policy info card
function PolicyCard({ title, value, highlight }) {
  return (
    <div className="border rounded p-4">
      <div className="text-sm text-gray-500 mb-1">{title}</div>
      <div className={`font-bold ${highlight ? "text-pink-600 text-lg" : ""}`}>
        {value}
      </div>
    </div>
  );
}

// Step card
function Step({ no, title, sub }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold">
        {no}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        {sub && <p className="text-sm text-gray-500 mt-1">{sub}</p>}
      </div>
    </div>
  );
}

// Event card
function EventCard({ event }) {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

  return (
    <div className="border rounded p-4">
      <img
        src={
          event.image
            ? `${BASE_URL}/uploads/${encodeURIComponent(event.image)}`
            : "/images/event-placeholder.png"
        }
        alt={event.title}
        className="h-32 w-full object-cover rounded mb-3"
        onError={(e) => {
          e.currentTarget.src = "/images/event-placeholder.png";
        }}
      />
      <p className="font-semibold text-sm">{event.title}</p>
      <p className="text-xs text-gray-500 mt-1">
        {event.description}
      </p>
    </div>
  );
}
