import RefundTable from "../components/RefundTable";
import Hero from "../components/Hero";
import PromoCards from "../components/PromoCards";
import Container from "../components/Container";
import LogoRow from "../pages/LogoRow";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Container>
      {/* Hero Section */}
      <Hero/>

      {/* Promotion Cards */}
      <PromoCards />

      {/* LogoRow Section */}
      <LogoRow />

      {/* Refund Activity */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <RefundTable />
      </section>
     {/* Support Section */}
      </Container>
    </main>
  );
}
