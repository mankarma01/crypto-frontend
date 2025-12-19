import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

export default function LogoRow() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const res = await api.get("/api/exchange/list");
        setExchanges(res.data || []);
      } catch (err) {
        console.error("LogoRow API error:", err.response || err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  if (loading) return <div className="text-center py-16">Loading exchanges...</div>;
  if (!exchanges.length) return <div className="text-center py-16">No exchanges found.</div>;

  return (
    <div className="overflow-hidden py-8 bg-white">
      <div className="flex gap-8 animate-marquee w-max">
        {[...exchanges, ...exchanges].map((ex, index) => (
          <div
            key={index}
            onClick={() => navigate(`/logorow/${ex.id}`)}
            className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer hover:scale-110 transition"
          >
            <img
              src={ex.logo || "/logos/bitcoin-btc-logo.png"}
              alt={ex.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-center">{ex.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
