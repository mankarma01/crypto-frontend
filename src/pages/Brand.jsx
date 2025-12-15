import TetherbackIcon from "../assets/brandPage.png"; // Replace with your icon path
import HeroImage from "../assets/brandPage.png"; // Full-width image you downloaded

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
          가상자산 시장은 빠르게 변화하고 있으며, 거래 방식과 상품은 점점 더 복잡해지고 있습니다.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          이러한 환경 속에서 테더백은 안전한 투자 문화를 조성하고 투자 정보를 제공하기 위해 설립되었습니다.
          저희는 업계 최초 B2B 수수료 환급 및 공식 거래소 비즈니스 지원을 제공하며 투자자 중심 산업을 선도하고 있습니다.
        </p>
        <p className="text-lg text-gray-700">
          앞으로도 테더백은 효율적인 수수료 관리와 다양한 투자 기회 제공을 통해 업계를 선도하며,
          투자자들이 쉽고 편리하게 투자 정보를 접근하고 다양한 거래에 참여할 수 있는 플랫폼을 구축해 나갈 것입니다.
        </p>
      </div>
    </section>
  );
}
