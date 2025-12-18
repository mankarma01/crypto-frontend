import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Profile() {
  const navigate = useNavigate();

  // Static fallback data (until API is ready)
  const staticProfile = {
    balance: "0.00 USDT",
    invitationCode: "CNUHX8",
    linkedExchanges: [],
    withdrawals: [],
    termsOfService: "서비스 약관이 아직 등록되지 않았습니다.",
  };

  const [userData, setUserData] = useState(staticProfile);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        // 🔒 Keep API call for future use
        const response = await api.get("/api/profile");

        // If API exists later, this will work automatically
        if (response?.data) {
          setUserData(response.data);
        }
      } catch (error) {
        // ❗ API not ready → fallback to static data
        console.warn("Profile API not ready, using static data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">내 프로필</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            로그아웃
          </button>
        </div>

        {/* Balance */}
        <div className="p-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl shadow">
          <p className="text-sm opacity-90">총 잔액</p>
          <p className="text-3xl font-bold mt-1">{userData.balance}</p>
        </div>

        {/* Invitation Code */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Test의 Tetherback 초대 코드
          </h2>
          <div className="flex items-center justify-between bg-white p-3 rounded font-mono">
            <span>{userData.invitationCode}</span>
            <button
              onClick={() => navigator.clipboard.writeText(userData.invitationCode)}
              className="text-pink-500 text-sm font-semibold"
            >
              복사
            </button>
          </div>
        </div>

        {/* Linkage Info */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">연결 정보</h2>
          <p className="text-gray-600">
            {userData.linkedExchanges.length > 0
              ? userData.linkedExchanges.join(", ")
              : "연결된 거래소가 없습니다"}
          </p>
        </div>

        {/* Withdrawal History */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">출금 내역</h2>
          {userData.withdrawals.length > 0 ? (
            <ul className="list-disc list-inside text-sm">
              {userData.withdrawals.map((w, i) => (
                <li key={i}>{w.date} - {w.amount} USDT</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">출금 내역이 없습니다</p>
          )}
        </div>

        {/* Terms */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">서비스 약관</h2>
          <p className="text-sm text-gray-600">{userData.termsOfService}</p>
        </div>

        {/* Edit Profile */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/edit-profile")}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            회원 정보 수정
          </button>
        </div>

      </div>
    </div>
  );
}
