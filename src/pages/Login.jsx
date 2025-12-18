import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api"; // your axios instance

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/api/login", { email, password });

      if (response.data.result) {
        // ✅ Save token
        localStorage.setItem("token", response.data.token);

        // ✅ UPDATE AUTH STATE (THIS WAS MISSING)
        setIsAuth(true);

        // ✅ Redirect
        navigate("/profile");
      } else {
        setError(response.data.msg || "로그인 실패");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("이메일 또는 비밀번호가 잘못되었습니다.");
      } else {
        setError("서버 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-24 flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-600 mb-1">이메일</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 text-white py-2 rounded font-semibold hover:bg-pink-600 transition"
            >
              {loading ? "로딩 중..." : "로그인"}
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm text-pink-500 font-medium">
            <Link to="/find-pw" className="hover:underline">아이디 찾기</Link>
            <Link to="/find-id" className="hover:underline">비밀번호 찾기</Link>
            <Link to="/join" className="hover:underline">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
