import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Loader from "../Loader"; // ✅ adjust path if needed

export default function LogoRow() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const res = await api.get("/api/exchange/list");
        setExchanges(res.data?.data || []);
      } catch (err) {
        console.error(
          "LogoRow API error:",
          err.response?.data || err.message || err
        );
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  // ✅ Loader
  if (loading) {
    return (
      <div className="py-16">
        <Loader loading={loading} />
      </div>
    );
  }

  // ✅ Empty state
  if (!exchanges.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        No exchanges found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden py-8 bg-white">
      <div className="flex gap-8 animate-marquee-ltr w-max">
        {[...exchanges, ...exchanges].map((ex, index) => (
          <div
            key={`${ex.id}-${index}`}
            onClick={() => ex.id && navigate(`/logorow/${ex.id}`)}
            className="flex flex-col items-center gap-2 min-w-20 cursor-pointer hover:scale-110 transition"
          >
            <img
              src={
                ex.logo
                  ? `${BASE_URL}/uploads/${encodeURIComponent(ex.logo)}`
                  : "/logos/bitcoin-btc-logo.png"
              }
              alt={ex.exchange_name || "Exchange Logo"}
              className="w-12 h-12 object-contain animate-spin-left"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/logos/bitcoin-btc-logo.png";
              }}
            />
            <span className="text-sm text-center">
              {ex.exchange_name || "Unknown"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
