import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exchanges from "./components/Exchanges";
import OfficialAffiliateExchanges from "./components/OfficialAffiliateExchanges";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import FindPassword from "./pages/FindPassword";
import FindID from "./pages/FindId";
import SupportSection from "./pages/Support";
import JoinMembership from "./pages/JoinMembership";
import Brand from "./pages/Brand";
import NoticeSection from "./pages/TradingGuide/NoticeSection";
import Bitget from "./pages/TradingGuide/Bitget";
import Tetherback from "./pages/TradingGuide/Tetherback";
import OKX from "./pages/TradingGuide/OKX";
import BINGX from "./pages/TradingGuide/BINGX";
import OKXVirtual from "./pages/TradingGuide/OKXVirtual";
import RefundCalculator from "./pages/FeeRefundCalculator/RefundCalculator";

// ✅ IMPORT ExchangeFlow
import ExchangeFlow from "./pages/FeeRefundCalculator/GettingStarte";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route
          path="/official-affiliate-exchanges"
          element={<OfficialAffiliateExchanges />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/find-pw" element={<FindID />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-id" element={<FindPassword />} />
        <Route path="/join" element={<JoinMembership />} />
        <Route path="/brand" element={<Brand />} />

        {/* Notice */}
        <Route path="/notice" element={<NoticeSection />} />
        <Route path="/notice/bitget-api-changes" element={<Bitget />} />
        <Route path="/notice/tetherback-satisfaction" element={<Tetherback />} />
        <Route path="/notice/okx-kyc-removal" element={<OKX />} />
        <Route path="/notice/bingx-kyc-transfer" element={<BINGX />} />
        <Route path="/notice/okx-pre-join-savings" element={<OKXVirtual />} />

        {/* Refund Flow */}
        <Route path="/refund" element={<RefundCalculator />} />

        {/* ✅ STEP FLOW (FIXED) */}
        <Route path="/getting-started/*" element={<ExchangeFlow />} />
      </Routes>

      <SupportSection />
      <Footer />
    </>
  );
}

export default App;
