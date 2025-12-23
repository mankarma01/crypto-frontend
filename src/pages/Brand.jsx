import { useEffect, useState } from "react";
import HeroImage from "../assets/brandLogo.jpg"; // Full-width image
import { FiDollarSign, FiHeadphones, FiBarChart2 } from "react-icons/fi";
import Container from "../components/Container";
import Loader from "../pages/Loader"; // import Loader

export default function Brand() {
  const [loading, setLoading] = useState(true);

  // Simulate async loading (like fetching API or ensuring image is loaded)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <section className="w-full relative">
      {/* Full-width hero image */}
      <div className="w-full h-96 md:h-[500px] relative overflow-hidden">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            크립토 익스체인지는 합리적인 추천 거래로
            <br />
            시장을 선도합니다
          </h1>
        </div>
      </div>

      {/* About Us */}
      <Container>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-500">
            회사 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            암호화폐 거래소는 투자 기회를 확대하고 쉽고 편리한 투자 방법을 제공합니다.
          </p>
        </div>
      </Container>

      {/* Business Highlight */}
      <Container>
        <div className="bg-white py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            안전한 레퍼럴 거래를 지원합니다
          </h2>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="border rounded-xl p-10 flex flex-col items-center text-center">
              <FiDollarSign className="w-24 h-24 mb-10 text-blue-500" />
              <p className="text-lg font-semibold leading-relaxed">
                B2B 공식 제휴를 통한<br />
                수수료 페이백
              </p>
            </div>

            {/* Card 2 */}
            <div className="border rounded-xl p-10 flex flex-col items-center text-center">
              <FiHeadphones className="w-24 h-24 mb-10 text-green-500" />
              <p className="text-lg font-semibold leading-relaxed">
                플랫폼 최초 해외거래소<br />
                이용 관련 상담 지원
              </p>
            </div>

            {/* Card 3 */}
            <div className="border rounded-xl p-10 flex flex-col items-center text-center">
              <FiBarChart2 className="w-24 h-24 mb-10 text-purple-500" />
              <p className="text-lg font-semibold leading-relaxed">
                재테크, 투자 정보 전달을<br />
                위한 소프트 콘텐츠 제공
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Message from CEO */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6 text-center">
          CEO 메시지
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          투자자 여러분, 안녕하세요.
          <br />
          <br />
          디지털 자산 시장은 지속적으로 성장하고 있으며, 거래 환경 또한 빠르게
          고도화되고 있습니다.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Crypto Exchange는 이러한 변화 속에서 투자자 여러분이 보다 안전하고
          합리적인 선택을 할 수 있도록 신뢰할 수 있는 정보와 효율적인 거래
          혜택을 제공하기 위해 출범하였습니다. 우리는 공식 거래소와의 협력을
          기반으로 투명한 수수료 구조와 실질적인 혜택을 제공하고 있습니다.
        </p>

        <p className="text-lg text-gray-700">
          앞으로도 Crypto Exchange는 투자자 중심의 서비스 철학을 바탕으로,
          누구나 쉽고 편리하게 투자 정보를 활용하고 다양한 글로벌 거래 환경에
          참여할 수 있는 플랫폼으로 성장해 나가겠습니다.
        </p>
      </div>
    </section>
  );
}
