import Container from "../../components/Container";
import { Link } from "react-router-dom";

export default function NoticeSection() {
  const exchangeTutorials = [
    {
      image: "/logos/bitunix.png",
      title: "Bitget API 거래 및 카피 트레이딩 환급률 변경 안내",
      date: "25.10.10",
      link: "/notice/bitget-api-changes"
    },
    {
      image: "/logos/bitcoin-btc-logo.png",
      title: "테더백 만족도 조사",
      date: "19.09.19",
      link: "/notice/tetherback-satisfaction"
    },
    {
      image: "/logos/dogecoin-doge-logo.png",
      title: "[OKX] KYC 제거 방법",
      date: "24.06.22",
      link: "/notice/okx-kyc-removal"
    },
    {
      image: "/logos/ethereum-eth-logo.svg",
      title: "[BINGX] KYC 이전 방법",
      date: "24.06.22",
      link: "/notice/bingx-kyc-transfer"
    },
  ];

  const newsletters = [
    {
      image: "/logos/solana-sol-logo.png",
      title: "OKX 거래소 가입 전 돈을 절약하는 방법",
      date: "24.08.02",
      link: "/notice/okx-pre-join-savings"
    },
    {
      image: "/logos/tether-usdt-logo.png",
      title: "KYC 인증 이유 / 선물 거래 팁",
      date: "24.08.02",
    },
    {
      image: "/logos/xrp-xrp-logo.png",
      title: "모바일로 3분 안에 30만원 환급 받는 방법 (OKX 버전)",
      date: "24.08.02",
    },
    {
      image: "/logos/bitunix.png",
      title: "거래소 가입 후 테더백(BITGET) 수수료 환급 받기",
      date: "24.08.02",
    },
  ];

const renderCards = (items) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    {items.map((item, index) => (
      <div 
        key={index} 
        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
      >
         <Link to={item.link || "#"}> 
           <div className="w-full h-40 md:h-48 lg:h-40 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>
        </Link>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">{item.title}</h3>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-auto">
            <span className="material-icons text-gray-400 text-sm">schedule</span> {item.date}
          </p>
        </div>
      </div>
    ))}
  </div>
);


  return (
    <Container>
    <section className="py-16 mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">거래소 튜토리얼</h2>
        <button className="text-pink-500 font-semibold hover:underline">전체 보기</button>
      </div>
      {renderCards(exchangeTutorials)}

      <div className="flex justify-between items-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">가상자산 뉴스레터</h2>
        <button className="text-pink-500 font-semibold hover:underline">전체 보기</button>
      </div>
      {renderCards(newsletters)}
    </section>
    </Container>
  );
}
