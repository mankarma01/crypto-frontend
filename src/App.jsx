<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api/api";
>>>>>>> origin/main

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
<<<<<<< HEAD
import NoticeSection from "./pages/TradingGuide/NoticeSection";
import Bitget from "./pages/TradingGuide/Bitget";
import Tetherback from "./pages/TradingGuide/Tetherback";
import OKX from "./pages/TradingGuide/OKX";
import BINGX from "./pages/TradingGuide/BINGX";
import OKXVirtual from "./pages/TradingGuide/OKXVirtual";
import RefundCalculator from "./pages/FeeRefundCalculator/RefundCalculator";

// ✅ IMPORT ExchangeFlow
import ExchangeFlow from "./pages/FeeRefundCalculator/GettingStarte";

=======
import NoticeSection from "./pages/NoticeSection";
import RefundCalculator from "./pages/RefundCalculator";
import Profile from "./pages/Profile";
>>>>>>> origin/main

function App() {
  const [isAuth, setIsAuth] = useState(null); // null = checking auth

  // ✅ CHECK TOKEN ON APP LOAD
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuth(false);
      return;
    }

    // verify token with protected API
    api.get("/api/profile")
      .then(() => {
        setIsAuth(true); // token valid
      })
      .catch(() => {
        localStorage.removeItem("token");
        setIsAuth(false); // token invalid
      });
  }, []);

  // ⏳ loading state while checking token
  if (isAuth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">로그인 상태 확인 중...</p>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <>
      <Navbar />
=======
    <Router>
      {/* ✅ Navbar decides Login / Profile */}
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
>>>>>>> origin/main

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
<<<<<<< HEAD
        <Route
          path="/official-affiliate-exchanges"
          element={<OfficialAffiliateExchanges />}
        />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/official-affiliate-exchanges" element={<OfficialAffiliateExchanges />} />
        
        {/* ✅ Login */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

>>>>>>> origin/main
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

<<<<<<< HEAD
        {/* ✅ STEP FLOW (FIXED) */}
        <Route path="/getting-started/*" element={<ExchangeFlow />} />
=======
        {/* ✅ PROTECTED PROFILE ROUTE */}
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
>>>>>>> origin/main
      </Routes>

      <SupportSection />
      <Footer />
    </>
  );
}

export default App;
