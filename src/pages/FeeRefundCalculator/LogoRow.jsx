import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

export default function LogoRow() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await api.get("/api/exchange/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
  }, [navigate]);

  if (loading) {
    return <div className="text-center py-16">Loading exchanges...</div>;
  }

  if (!exchanges.length) {
    return <div className="text-center py-16">No exchanges found.</div>;
  }

  return (
    <div className="overflow-hidden py-8 bg-white">
      <div className="flex gap-8 animate-marquee-ltr w-max">
        {[...exchanges, ...exchanges].map((ex, index) => (
          <div
            key={`${ex.id}-${index}`}
            onClick={() => ex.id && navigate(`/logorow/${ex.id}`)}
            className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer hover:scale-110 transition"
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
                e.target.src = "/logos/bitcoin-btc-logo.png";
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
