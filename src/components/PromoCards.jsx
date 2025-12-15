export default function PromoCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
      
      {/* Cashback Card */}
      <div className="relative bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-2xl p-8 overflow-hidden">
        <h3 className="text-2xl font-bold mb-4">
          수수료 환급
        </h3>

        <p className="text-sm opacity-90 mb-6 leading-relaxed">
          지금까지 평균적으로<br />
          <span className="font-semibold text-lg">
            1,237,000원
          </span>{" "}
          상당의 수수료를 환급받았습니다.
        </p>

        <p className="text-lg font-semibold">
          업계 최고 수준의<br />
          환급률 제공
        </p>

        <span className="absolute bottom-6 right-6 text-sm opacity-90">
          1 USDT 거래부터 환급 가능
        </span>
      </div>

      {/* Discount Card */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">
          수수료 할인
        </h3>

        <p className="text-sm opacity-90 leading-relaxed">
          CryptoExchange에서만 제공하는<br />
          제휴 거래소 전용 할인 혜택을 확인하세요.
        </p>
      </div>

    </section>
  );
}
