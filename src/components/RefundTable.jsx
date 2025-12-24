import { useEffect, useState } from "react";
import api from "../api/api";
import Loader from "../pages/Loader";

export default function RefundTable() {
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRefundStatus = async () => {
      try {
        const res = await api.get("/api/refund_status");

        if (res.data?.success) {
          setRefunds(res.data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch refund status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRefundStatus();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md mt-10 overflow-hidden relative">
      
      {/* ✅ Loader Overlay */}
      <Loader loading={loading} />

      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">
          실시간 환급 현황
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          실제 사용자들의 최근 환급 내역입니다
        </p>
      </div>

      {/* Empty State */}
      {!loading && refunds.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          환급 내역이 없습니다.
        </div>
      )}

      {/* Table */}
      {!loading && refunds.length > 0 && (
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
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 text-gray-700">
                    {item.uid || "-"}
                  </td>

                  <td className="p-4 font-semibold text-gray-900">
                    {item.exchange_name || "-"}
                  </td>

                  <td className="p-4 text-green-600 font-bold">
                    {item.amount || "0"} USDT
                  </td>

                  <td className="p-4 text-blue-600">
                    {item.status || "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
