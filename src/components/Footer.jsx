import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-300 text-zinc-700 pt-10 pb-8">
      <Container>
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-2">CryptoExchange</h4>
            <p className="text-sm opacity-90 leading-relaxed">
              제휴된 암호화폐 거래소를 기반으로 한 리워드 플랫폼으로<br />
              거래 수수료 환급 및 할인 혜택을 제공합니다.<br />
              소액 거래에서도 동일한 혜택을 누릴 수 있습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-2">빠른 링크</h4>
            <ul className="text-sm opacity-90 space-y-1">
              <li><a href="#" className="hover:underline">홈</a></li>
              <li><a href="#" className="hover:underline">환급 활동</a></li>
              <li><a href="#" className="hover:underline">프로모션</a></li>
              <li><a href="#" className="hover:underline">고객 지원</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-xl font-bold mb-2">문의 / 소셜</h4>
            <div className="text-sm opacity-90 space-y-1">
              <p className="font-semibold">카카오톡: KakaoTalk ID</p>
              <p className="font-semibold">텔레그램: @TelegramID</p>
            </div>
          </div>

        </div>

        {/* Legal / Terms */}
        <div className="mt-6 border-t border-zinc-400 pt-4 text-center text-xs opacity-80 leading-relaxed">
          <p>
            CryptoExchange는 제휴 거래소의 리워드 및 수수료 환급 정보를 제공하는 플랫폼입니다.<br />
            암호화폐 거래는 높은 변동성과 위험을 수반하며, 모든 거래의 책임은 이용자 본인에게 있습니다.
          </p>

          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">이용약관</a>
            <a href="#" className="hover:underline">개인정보처리방침</a>
          </div>
        </div>

        <div className="mt-3 text-center text-xs opacity-70">
          © 2025 CryptoExchange. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
