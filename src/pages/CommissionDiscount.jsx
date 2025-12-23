import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Container from "../components/Container";
import Loader from "../pages/Loader"; // import Loader

export default function CommissionDiscount() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/exchange/list");

        if (res.data?.result) {
          setExchanges(res.data.data || []);
        }
      } catch (err) {
        console.error("Failed to fetch exchanges:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  // Show loader while fetching data
  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <Container>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-gray-900">
          어떤 Position에서나, 수수료 할인
        </h1>
        <p className="mt-3 text-gray-600">
          테더백 회원은 거래할때 마다 수수료 할인
        </p>

        {/* Summary Cards (CLICKABLE) */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {exchanges.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/logorow/${item.id}`)}
              className="border rounded-xl p-6 shadow-sm cursor-pointer
                         hover:shadow-md hover:scale-[1.02] transition"
            >
              <img
                src={
                  item.logo
                    ? `${BASE_URL}/uploads/${encodeURIComponent(item.logo)}`
                    : "/logos/bitcoin-btc-logo.png"
                }
                alt={item.exchange_name}
                className="h-10 mb-4 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/logos/bitcoin-btc-logo.png";
                }}
              />

              <h3 className="text-lg font-semibold">{item.exchange_name}</h3>

              <p className="mt-4 text-3xl font-bold text-green-600">
                {item.commission_value}%
              </p>
              <p className="text-sm text-gray-500">할인율</p>
            </div>
          ))}
        </div>

        {/* Details Table */}
        <div className="overflow-x-auto mt-16">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">거래소</th>
                <th className="p-4">할인율</th>
                <th className="p-4">환급률</th>
                <th className="p-4">최소 출금</th>
                <th className="p-4"></th>
              </tr>
            </thead>

            <tbody>
              {exchanges.map((item) => (
                <tr key={item.id} className="border-t">
                  {/* CLICKABLE exchange cell */}
                  <td
                    className="p-4 flex items-center gap-3 cursor-pointer
                               hover:text-blue-600"
                    onClick={() => navigate(`/logorow/${item.id}`)}
                  >
                    <img
                      src={
                        item.logo
                          ? `${BASE_URL}/uploads/${encodeURIComponent(item.logo)}`
                          : "/logos/bitcoin-btc-logo.png"
                      }
                      alt={item.exchange_name}
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/logos/bitcoin-btc-logo.png";
                      }}
                    />
                    <span className="font-semibold">{item.exchange_name}</span>
                  </td>

                  <td className="p-4 text-center">{item.commission_value}%</td>

                  <td className="p-4 text-center">{item.cashback_percentage}%</td>

                  <td className="p-4 text-center">
                    {item.min_withdraw_amount} {item.currency}
                  </td>

                  {/* External referral link */}
                  <td className="p-4 text-center">
                    <a
                      href={item.referral_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      수수료 우대 받기
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
}
