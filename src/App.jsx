import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api/api";

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
import NoticeSection from "./pages/NoticeSection";
import RefundCalculator from "./pages/RefundCalculator";
import Profile from "./pages/Profile";

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
    <Router>
      {/* ✅ Navbar decides Login / Profile */}
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/official-affiliate-exchanges" element={<OfficialAffiliateExchanges />} />
        
        {/* ✅ Login */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route path="/find-pw" element={<FindID />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-id" element={<FindPassword />} />
        <Route path="/join" element={<JoinMembership />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/notice" element={<NoticeSection />} />
        <Route path="/refund" element={<RefundCalculator />} />

        {/* ✅ PROTECTED PROFILE ROUTE */}
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>

      <SupportSection />
      <Footer />
    </Router>
  );
}

export default App;
