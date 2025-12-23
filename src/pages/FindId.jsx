import { useState } from "react";
import api from "../api/api";

export default function FindID() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null); // ✅ NEW

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setMessage("이메일 또는 전화번호를 입력해주세요.");
      return;
    }

    setLoading(true);
    setMessage("");
    setUserData(null);

    try {
      const response = await api.post("/api/find/id", {
        email: input, // or mobile_no based on backend logic
      });

      if (response.data.success) {
        setUserData(response.data.data); // ✅ store user data
        setMessage(response.data.msg);
      } else {
        setMessage(response.data.msg || "아이디를 찾을 수 없습니다.");
      }
    } catch (err) {
      console.error(err);
      setMessage("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          아이디 찾기
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              이메일 또는 전화번호
            </label>
            <input
              type="text"
              placeholder="이메일 또는 전화번호 입력"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-pink-500 text-white py-2 rounded font-semibold transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-600"
            }`}
          >
            {loading ? "조회 중..." : "다음"}
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <div className="text-center mt-4 text-sm text-gray-600">
            {message}
          </div>
        )}

        {/* ✅ USER DATA RESULT */}
        {userData && (
          <div className="mt-6 border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">이름</span>
              <span className="font-medium">{userData.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">이메일</span>
              <span className="font-medium">{userData.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">전화번호</span>
              <span className="font-medium">{userData.mobile_no}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">가입일</span>
              <span className="font-medium">
                {new Date(userData.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
