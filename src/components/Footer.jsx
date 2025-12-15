import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12">
        <Container>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">CryptoExchange</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            제휴 거래소 기반의 리워드 플랫폼으로<br />
            거래 수수료 환급과 할인 혜택을 제공합니다.<br />
            소액 거래부터 혜택을 누릴 수 있습니다.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">빠른 링크</h4>
          <ul className="text-sm opacity-90 space-y-2">
            <li><a href="#" className="hover:underline">홈</a></li>
            <li><a href="#" className="hover:underline">환급 활동</a></li>
            <li><a href="#" className="hover:underline">프로모션</a></li>
            <li><a href="#" className="hover:underline">고객 지원</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-xl font-bold mb-4">문의 / 소셜</h4>
          <p className="text-sm opacity-90 mb-4">
            카카오톡: <span className="font-semibold">KakaoTalk ID</span><br />
            텔레그램: <span className="font-semibold">@TelegramID</span>
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-semibold">카카오톡</a>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold">텔레그램</a>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-sm opacity-70">
        © 2025 CryptoExchange. All rights reserved.
      </div>
      </Container>
    </footer>
  );
}
