import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Container from "./Container";

export default function OfficialAffiliateExchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

  const badgeStyleMap = {
    popular: "bg-pink-100 text-pink-600",
    rising: "bg-purple-100 text-purple-600",
    payback: "bg-green-100 text-green-600",
    premium: "bg-yellow-100 text-yellow-700",
  };

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const res = await api.get("/api/exchange/list");
        if (res.data?.result) {
          setExchanges(res.data.data || []);
        }
      } catch (err) {
        console.error("Exchange list error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  if (loading) {
    return (
      <Container>
        <p className="text-center py-20">Loading...</p>
      </Container>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
      <Container>
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Reality 수수료 환급</h2>
          <p className="text-gray-500 text-sm">
            테더백 회원은 거래할때 마다 수수료 환급
          </p>
        </div>

        {/* Exchange Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchanges.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/exchange/${item.id}`)}
              className="bg-white rounded-xl border shadow-sm p-5 flex flex-col cursor-pointer hover:shadow-lg hover:scale-[1.02] transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      item.logo
                        ? `${BASE_URL}/uploads/${encodeURIComponent(item.logo)}`
                        : "/logos/bitcoin-btc-logo.png"
                    }
                    alt={item.exchange_name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/logos/bitcoin-btc-logo.png";
                    }}
                  />
                  <h3 className="text-lg font-bold">
                    {item.exchange_name}
                  </h3>
                </div>

                {/* Optional badge (if you later add from backend) */}
                {item.badge && (
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      badgeStyleMap[item.badge]
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Refund Info */}
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Refund rate</span>
                  <span className="font-semibold text-pink-500">
                    {item.cashback_percentage}%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Transaction discount rate
                  </span>
                  <span className="text-blue-700 font-semibold">
                    {item.commission_value}%
                  </span>
                </div>
              </div>

              {/* Prices */}
              <div className="grid grid-cols-2 bg-gray-100 rounded-md mt-auto">
                <div className="p-3 text-center border-r">
                  <p className="text-xs text-gray-500">Min Withdraw</p>
                  <p className="font-medium">
                    {item.min_withdraw_amount} {item.currency}
                  </p>
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs text-gray-500">Commission Type</p>
                  <p className="font-medium capitalize">
                    {item.commission_type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
