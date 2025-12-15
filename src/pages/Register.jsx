export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          회원가입
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

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              비밀번호 확인
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
            회원가입
          </button>
        </form>

      </div>
    </div>
  );
}
