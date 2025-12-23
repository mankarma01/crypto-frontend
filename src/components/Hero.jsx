import { useEffect, useState } from "react";
import Loader from "../pages/Loader"; // import Loader
import api from "../api/api";

export default function Hero() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // start with true to show loader initially

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/user_profile");
      if (response.data?.success) {
        setUserData(response.data.data || null); // fallback to null if data missing
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Show loader while loading or userData is null
  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-12 relative">
      <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
        {userData?.name ? `${userData.name}님,` : "투자자 여러분,"}
        <br />
        나에게 맞는 거래 혜택을 선택하세요.
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        CryptoExchange는 거래 수수료를 환급해주는
        제휴 기반 리워드 플랫폼입니다.
        소액 거래부터 혜택을 받을 수 있습니다.
      </p>
    </section>
  );
}
