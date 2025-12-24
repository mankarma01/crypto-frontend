import { useEffect, useState } from "react";
import RefundTable from "../components/RefundTable";
import Hero from "../components/Hero";
import PromoCards from "../components/PromoCards";
import Container from "../components/Container";
import LogoRow from "../pages/FeeRefundCalculator/LogoRow";
import Loader from "../pages/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // page mount loader (smooth UX)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5 sec (adjust if needed)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <Container>
        {/* Hero Section */}
        <Hero />

        {/* Promotion Cards */}
        <PromoCards />

        {/* LogoRow Section */}
        <LogoRow />

        {/* Refund Activity */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <RefundTable />
        </section>
      </Container>
    </main>
  );
}
