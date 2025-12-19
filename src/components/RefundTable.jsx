import { useEffect, useState } from "react";
import axios from "axios";

export default function RefundTable() {
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://crypto.kuchvkharido.xyz/api/exchange/list";

  useEffect(() => {
    setLoading(true);

    axios.get(API_URL)
      .then(res => {
        // API response structure ke hisab se adjust karo
        setRefunds(res.data.data); 
      })
      .catch(err => console.error("Error fetching refund data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-10">Loading refunds...</p>;

  return (
    <div className="bg-white rounded-xl shadow-md mt-10 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">실시간 환급 현황</h2>
        <p className="text-sm text-gray-500 mt-1">
          실제 사용자들의 최근 환급 내역입니다
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left font-medium">UID</th>
              <th className="p-4 text-left font-medium">거래소</th>
              <th className="p-4 text-left font-medium">환급 금액</th>
              <th className="p-4 text-left font-medium">상태</th>
            </tr>
          </thead>

          <tbody>
            {refunds.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 text-gray-700">{item.uid}</td>
                <td className="p-4 font-semibold text-gray-900">{item.exchange}</td>
                <td className="p-4 text-green-600 font-bold">{item.amount}</td>
                <td className="p-4 text-blue-600">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
