import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Profile() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/user_profile");

        if (response.data?.success) {
          setUserData(response.data.data);
        } else {
          console.warn("Failed to fetch user profile, using fallback");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

 const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        로딩 중...
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        사용자 정보를 불러올 수 없습니다.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{userData.name}님의 프로필</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            로그아웃
          </button>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
          <div>
            <div className="font-semibold mb-1">이름</div>
            <div>{userData.name}</div>
          </div>
          <div>
            <div className="font-semibold mb-1">이메일</div>
            <div>{userData.email}</div>
          </div>
          <div>
            <div className="font-semibold mb-1">전화번호</div>
            <div>{userData.mobile_no || "-"}</div>
          </div>
          <div>
            <div className="font-semibold mb-1">주소</div>
            <div>
              {userData.address || "-"}, {userData.city || "-"}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">KYC ID</div>
            <div>{userData.kyc_id || "-"}</div>
          </div>
          <div>
            <div className="font-semibold mb-1">상태</div>
            <div>{userData.user_status === 0 ? "활성" : "비활성"}</div>
          </div>
          <div>
            <div className="font-semibold mb-1">가입일</div>
            <div>{new Date(userData.created_at).toLocaleDateString()}</div>
          </div>
          <div>
            <div className="font-semibold mb-1">지갑 잔액</div>
            <div className="text-lg font-bold text-pink-600">
              {userData.wallet_ammount ?? "0.00"} USDT
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">최근 업데이트</div>
            <div>{new Date(userData.updated_at).toLocaleDateString()}</div>
          </div>
        </div>

        {/* Edit Profile
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/edit-profile")}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            회원 정보 수정
          </button>
        </div> */}
      </div>
    </div>
  );
}
