import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CryptoExchangeLogo from "/logo.svg"; // Replace with actual logo path
import LogoRow from "../../pages/FeeRefundCalculator/LogoRow";
import Loader from "../../pages/Loader"; // Import Loader component

export default function RefundCalculator() {
  const [loading, setLoading] = useState(true);

  // Simulate async loading (or API fetch)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  // Show loader until page is ready
  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14 text-center">

          {/* Logo Section */}
          <img
            src={CryptoExchangeLogo}
            alt="Crypto Exchange Logo"
            className="mx-auto w-24 mb-6"
          />

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            환급 테스트
          </h2>

          {/* Description Text */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            지금 바로 받을 수 있는 수수료 환급 금액을 확인해 보시겠습니까?
          </p>

          {/* Call To Action Button */}
          <Link
            to="/getting-started"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-pink-600 transition"
          >
            시작하기
          </Link>

          {/* Rotating Logos */}
          <div className="mb-8 mt-10">
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  );
}
