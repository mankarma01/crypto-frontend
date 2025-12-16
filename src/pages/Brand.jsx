import TetherbackIcon from "../assets/brandLogo.jpg"; // Replace with your icon path
import HeroImage from "../assets/brandLogo.jpg"; // Full-width image you downloaded

export default function Brand() {
  return (
    <section className="w-full">
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
  크립토 익스체인지는 합리적인 추천 거래로<br />
  시장을 선도합니다
</h1>

  </div>
</div>


      {/* About Us */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-500">
          회사 소개
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          테더백은 투자 기회를 확장하고 쉽고 편리하게 투자할 수 있는 방법을 제공합니다.
        </p>
      </div>

      {/* Business Highlight */}
      <div className="bg-gray-50 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-500">
          주요 비즈니스 특징
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <img src={TetherbackIcon} alt="수수료 환급" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">수수료 환급</h3>
            <p className="text-gray-600">
              공식 B2B 제휴를 통해 제공
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <img src={TetherbackIcon} alt="컨설팅 지원" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">컨설팅 지원</h3>
            <p className="text-gray-600">
              플랫폼 최초 해외 거래소 사용을 위한 지원
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <img src={TetherbackIcon} alt="금융 콘텐츠" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">금융 콘텐츠</h3>
            <p className="text-gray-600">
              금융 기술 및 투자 정보를 위한 소프트 콘텐츠 제공
            </p>
          </div>
        </div>
      </div>

 {/* Message from CEO */}
<div className="max-w-5xl mx-auto px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6 text-center">
    CEO 메시지
  </h2>

  <p className="text-lg text-gray-700 mb-4">
    투자자 여러분, 안녕하세요.<br /><br />
    디지털 자산 시장은 지속적으로 성장하고 있으며, 거래 환경 또한 빠르게 고도화되고 있습니다.
  </p>

  <p className="text-lg text-gray-700 mb-4">
    Crypto Exchange는 이러한 변화 속에서 투자자 여러분이 보다 안전하고 합리적인 선택을 할 수 있도록
    신뢰할 수 있는 정보와 효율적인 거래 혜택을 제공하기 위해 출범하였습니다.
    우리는 공식 거래소와의 협력을 기반으로 투명한 수수료 구조와 실질적인 혜택을 제공하고 있습니다.
  </p>

  <p className="text-lg text-gray-700">
    앞으로도 Crypto Exchange는 투자자 중심의 서비스 철학을 바탕으로,
    누구나 쉽고 편리하게 투자 정보를 활용하고 다양한 글로벌 거래 환경에 참여할 수 있는
    플랫폼으로 성장해 나가겠습니다.
  </p>
</div>

    </section>
  );
}
