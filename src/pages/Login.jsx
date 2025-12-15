import { Link } from "react-router-dom";
import SupportSection from "./Support";
export default function Login() {
  return (
     <div className="min-h-screen bg-gray-50 px-6 pt-24 flex flex-col ">
    {/* Login Section */}
    <div className="flex flex-1 items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          로그인
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              이메일
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded font-semibold hover:bg-pink-600 transition"
          >
            로그인
          </button>
        </form>
   {/* Links below the login button */}
        <div className="flex justify-between mt-4 text-sm text-pink-500 font-medium">
          <Link to="/find-pw" className="hover:underline">아이디 찾기</Link>
          <Link to="/find-id" className="hover:underline">비밀번호 찾기</Link>
          <Link to="/join" className="hover:underline">회원가입</Link>
        </div>
      </div>
      </div>
      {/* <SupportSection /> */}
    </div>
  );
}
