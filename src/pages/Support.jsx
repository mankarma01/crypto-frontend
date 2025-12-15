import Container from "../components/Container";

export default function SupportSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 bg-white">
        <Container >
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 mb-6">
        외환 거래 관련 문의
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
        질문이 있으신가요? 문의할 수 없어 답답하신가요?  
        테더백(Tetherback)이 운영하며, 각 공식 제휴 거래소의 서비스 지원을 위해 연락해 주세요.
      </p>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        #KYC 인증 방법 <br />
        #거래 실패 시 지원
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <a
        //   href="https://kakaotalk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          카카오톡 문의
        </a>
        <a
        //   href="https://t.me/YourTelegramLink"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          텔레그램 문의
        </a>
      </div>
    </Container>
    </section>
  );
}
