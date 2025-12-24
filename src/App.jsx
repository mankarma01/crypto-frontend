import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api/api";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
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
import ExchangeFlow from "./pages/FeeRefundCalculator/GettingStarte";
import LogoRowDetail from "./pages/FeeRefundCalculator/LogoRowDetail";
import Profile from "./pages/Profile";
import CommissionDiscount from "./pages/CommissionDiscount";
import Loader from "./pages/Loader";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuth(false);
        setAuthLoading(false);
        return;
      }

      try {
        await api.get("/api/user_profile"); // validate token
        setIsAuth(true);
      } catch (err) {
        localStorage.removeItem("token");
        setIsAuth(false);
      } finally {
        setAuthLoading(false);
      }
    };

    checkToken();
  }, []);

  // ✅ Global Loader (NO TEXT)
  if (authLoading) {
    return <Loader loading={true} />;
  }

  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/logorow/:id" element={<LogoRowDetail />} />
        <Route
          path="/official-affiliate-exchanges"
          element={<OfficialAffiliateExchanges />}
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            isAuth ? <Navigate to="/profile" replace /> : <Login setIsAuth={setIsAuth} />
          }
        />
        <Route
          path="/register"
          element={isAuth ? <Navigate to="/profile" replace /> : <Register />}
        />

        <Route path="/find-pw" element={<FindID />} />
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

        <Route path="/commission-discount" element={<CommissionDiscount />} />
        <Route path="/refund" element={<RefundCalculator />} />
        <Route path="/getting-started/*" element={<ExchangeFlow />} />

        {/* Protected Profile */}
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" replace />}
        />
      </Routes>

      <SupportSection />
      <Footer />
    </>
  );
}

export default App;
