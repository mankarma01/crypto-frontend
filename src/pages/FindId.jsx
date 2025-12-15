export default function FindID() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          아이디 찾기
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              이메일 또는 전화번호
            </label>
            <input
              type="text"
              placeholder="이메일 또는 전화번호 입력"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded font-semibold hover:bg-pink-600 transition"
          >
            다음
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          입력하신 정보로 아이디를 찾을 수 있습니다.
        </div>
      </div>
    </div>
  );
}
