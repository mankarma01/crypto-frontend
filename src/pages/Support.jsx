import Container from "../components/Container";

export default function SupportSection() {
  return (
    <section className="bg-white py-25">
      <Container>

        {/* SAME WIDTH WRAPPER */}
        <div className="max-w-5xl mx-auto">

          {/* Pink Heading */}
          <h2 className="text-start text-[rgb(246,34,199)] text-xl font-semibold mb-4">
            문의할 수 없어 답답하신가요?
          </h2>

          {/* Support Box */}
<<<<<<< HEAD
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
=======
          <div className="border border-gray-300 p-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
>>>>>>> 516b39219e5dab3e362d65e7802a787a0230e1d4

            {/* Left Content */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                CryptoExchange 운영
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                공식 제휴 거래소별 서비스 지원 문의
              </h3>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                  #KYC 인증 방법
                </span>
                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                  #거래 실패 시
                </span>
              </div>
            </div>

            {/* Right Button */}
            <div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3
                  bg-[rgb(0,173,236)]
                  text-white font-semibold
<<<<<<< HEAD
                  px-10 py-2 rounded-md transition"
=======
                  px-15 py-1 rounded-md transition"
>>>>>>> 516b39219e5dab3e362d65e7802a787a0230e1d4
              >
                <img
                  src="/logos/telegram-png.webp"
                  alt="Telegram"
                  className="w-5 h-5"
                />
                텔레그램 문의
              </a>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
