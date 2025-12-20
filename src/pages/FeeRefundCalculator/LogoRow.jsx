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
      const token = localStorage.getItem("token");
      console.log("TOKEN:", token);

      if (!token) {
        console.warn("No token found, redirect to login");
        navigate("/login"); // optional
        return;
      }

      const res = await api.get("/api/exchange/list", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ send token
        },
      });

      const list = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setExchanges(list);

    } catch (err) {
      console.error("LogoRow API error:", err.response?.data || err.message || err);
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
            onClick={() => ex.id && navigate(`/logorow/${ex.id}`)} // ✅ safe navigate
            className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer hover:scale-110 transition"
          >
            <img
              src={ex.logo || "/logos/bitcoin-btc-logo.png"} // ✅ fallback logo
              alt={ex.name || "Exchange Logo"}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-center">{ex.name || "Unknown"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
