import { Link } from "react-router-dom";
import Container from "./Container";

export default function OfficialAffiliateExchanges() {
  const badgeStyleMap = {
    popular: "bg-pink-100 text-pink-600",
    rising: "bg-purple-100 text-purple-600",
    payback: "bg-green-100 text-green-600",
    premium: "bg-yellow-100 text-yellow-700",
  };

  const exchanges = [
    {
      name: "Gate",
      logo: "https://via.placeholder.com/40",
      badge: { type: "popular", label: "인기 거래소" },
      refundMain: "75%",
      refundExtra: null,
      discountRate: "75%",
      limitPrice: "0.005%",
      marketPrice: "0.012%",
    },
    {
      name: "Bitunix",
      logo: "https://via.placeholder.com/40",
      badge: null,
      refundMain: "75%",
      refundExtra: null,
      discountRate: "75%",
      limitPrice: "0.006%",
      marketPrice: "0.014%",
    },
    {
      name: "Tapbit",
      logo: "https://via.placeholder.com/40",
      badge: { type: "rising", label: "Rising 거래소" },
      refundMain: "75%",
      refundExtra: "33% discount",
      discountRate: "82%",
      limitPrice: "0.003%",
      marketPrice: "0.01%",
    },
    {
      name: "Deepcoin",
      logo: "https://via.placeholder.com/40",
      badge: { type: "rising", label: "Rising 거래소" },
      refundMain: "70%",
      refundExtra: "50% discount",
      discountRate: "85%",
      limitPrice: "0.006%",
      marketPrice: "0.018%",
    },
    {
      name: "BitMEX",
      logo: "https://via.placeholder.com/40",
      badge: { type: "payback", label: "현물 Payback" },
      refundMain: "65%",
      refundExtra: null,
      discountRate: "65%",
      limitPrice: "0.017%",
      marketPrice: "0.017%",
    },
    {
      name: "LBANK",
      logo: "https://via.placeholder.com/40",
      badge: { type: "popular", label: "인기 거래소" },
      refundMain: "64%",
      refundExtra: "17% discount",
      discountRate: "70%",
      limitPrice: "0.007%",
      marketPrice: "0.017%",
    },
    {
      name: "WOOX",
      logo: "https://via.placeholder.com/40",
      badge: { type: "payback", label: "현물 Payback" },
      refundMain: "61%",
      refundExtra: null,
      discountRate: "61%",
      limitPrice: "0.007%",
      marketPrice: "0.019%",
    },
    {
      name: "BingX",
      logo: "https://via.placeholder.com/40",
      badge: { type: "premium", label: "Premium" },
      refundMain: "60%",
      refundExtra: "20% discount",
      discountRate: "68%",
      limitPrice: "0.006%",
      marketPrice: "0.016%",
    },
    {
      name: "Bitmart",
      logo: "https://via.placeholder.com/40",
      badge: null,
      refundMain: "60%",
      refundExtra: "30% discount",
      discountRate: "72%",
      limitPrice: "0.005%",
      marketPrice: "0.016%",
    },
    {
      name: "OrangeX",
      logo: "https://via.placeholder.com/40",
      badge: null,
      refundMain: "60%",
      refundExtra: "30% discount",
      discountRate: "72%",
      limitPrice: "0.005%",
      marketPrice: "0.016%",
    },
    {
      name: "Bitget",
      logo: "https://via.placeholder.com/40",
      badge: { type: "popular", label: "인기 거래소" },
      refundMain: "58%",
      refundExtra: "50% discount",
      discountRate: "79%",
      limitPrice: "0.008%",
      marketPrice: "0.016%",
    },
    {
      name: "HTX",
      logo: "https://via.placeholder.com/40",
      badge: { type: "premium", label: "Premium" },
      refundMain: "58%",
      refundExtra: null,
      discountRate: "58%",
      limitPrice: "0.008%",
      marketPrice: "0.025%",
    },
    {
      name: "OKX",
      logo: "https://via.placeholder.com/40",
      badge: { type: "rising", label: "Rising 거래소" },
      refundMain: "56%",
      refundExtra: null,
      discountRate: "56%",
      limitPrice: "0.008%",
      marketPrice: "0.022%",
    },
    {
      name: "MEXC",
      logo: "https://via.placeholder.com/40",
      badge: { type: "rising", label: "Rising 거래소" },
      refundMain: "50%",
      refundExtra: null,
      discountRate: "50%",
      limitPrice: "0.0%",
      marketPrice: "0.01%",
    },
    {
      name: "CoinW",
      logo: "https://via.placeholder.com/40",
      badge: null,
      refundMain: "60%",
      refundExtra: null,
      discountRate: "72%",
      limitPrice: "0.005%",
      marketPrice: "0.03%",
    },
    {
      name: "Bitmart",
      logo: "https://via.placeholder.com/40",
      badge: { type: "payback", label: "안정성 Top" },
      refundMain: "40%",
      refundExtra: null,
      discountRate: "40%",
      limitPrice: "0.02%",
      marketPrice: "0.055%",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
      <Container>
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Reality 수수료 환급</h2>
        <p className="text-gray-500 text-sm">
          테더백 회원은 거래할때 마다 수수료 환급
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-b pb-10 border-b-gray-300">
        {/* Card 1 */}
        <div className="w-[210px]  bg-[#F622C7] text-white p-6 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="border-t border-white/60 mb-6"></div>
            <p className="text-lg font-semibold">Premium</p>
            <p className="text-lg font-semibold mb-2">환급률</p>
            <h3 className="text-5xl font-bold">75%</h3>
          </div>

          <div className="bg-white rounded-md p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <span className="text-black font-medium">Gate</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[210px] bg-[rgb(30,32,128)] text-white p-6 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="border-t border-white/60 mb-6"></div>
            <p className="text-lg font-semibold mb-2">환급률</p>
            <h3 className="text-5xl font-bold">75%</h3>
          </div>

          <div className="bg-white rounded-md p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <span className="text-black font-medium">Bitunix</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[210px] bg-[#F5F5F5] text-black p-6 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="border-t border-black mb-6"></div>
            <p className="text-lg font-semibold mb-2">환급률</p>
            <h3 className="text-5xl font-bold">75%</h3>
          </div>

          <div className=" bg-white rounded-md p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <span className="font-medium">Tapbit</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[210px] bg-[#7A4691] text-white p-6 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="border-t border-white/60 mb-6"></div>
            <p className="text-lg font-semibold mb-2">환급률</p>
            <h3 className="text-5xl font-bold">70%</h3>
          </div>

          <div className="bg-white rounded-md p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <span className="text-black font-medium">Deepcoin</span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-[Pretendard,sans-serif] text-[20px] leading-[28px] font-medium text-[#212529] mt-10">
          수수료 환급이 가능한
        </p>
        <p className="font-[Pretendard,sans-serif] text-[20px] leading-[28px] font-medium text-[#212529]  mb-6">
          다양한 거래소를 만나 보세요
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exchanges.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-sm p-5 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-lg font-bold">{item.name}</h3>
              </div>

              {item.badge && (
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    badgeStyleMap[item.badge.type]
                  }`}
                >
                  {item.badge.label}
                </span>
              )}
            </div>

            {/* Refund Rate */}
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Refund rate</span>
                <span className="font-semibold">
                  <span className="text-pink-500">{item.refundMain}</span>
                  {item.refundExtra && (
                    <span className="text-blue-600"> + {item.refundExtra}</span>
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Transaction discount rate</span>
                <span className="text-blue-700 font-semibold">
                  {item.discountRate}
                </span>
              </div>
            </div>

            {/* Prices */}
            <div className="grid grid-cols-2 bg-gray-100 rounded-md mt-auto">
              <div className="p-3 text-center border-r">
                <p className="text-xs text-gray-500">Limit price</p>
                <p className="font-medium">{item.limitPrice}</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-xs text-gray-500">Market price</p>
                <p className="font-medium">{item.marketPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="font-[Pretendard,sans-serif] text-[20px] leading-[28px] font-medium text-pink-500 mt-10">
          물어볼 수 없어 답답하셨죠?
        </p>
      </div>
</Container>      
    </section>
  );
}
