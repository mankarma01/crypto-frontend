export default function Exchanges() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">
        제휴 거래소
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          Binance
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          Bybit
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          OKX
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          Bitget
        </div>
      </div>
    </section>
  );
}
