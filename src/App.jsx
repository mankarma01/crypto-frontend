import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exchanges from "./components/Exchanges";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import FindPassword from "./pages/FindPassword";
import FindID from "./pages/FindId";
import SupportSection from "./pages/Support";
import JoinMembership from "./pages/JoinMembership";
import Brand from "./pages/Brand";
import NoticeSection from "./pages/NoticeSection";

// function Home() {
//   return <div className="p-5">홈 페이지</div>;
// }

// function Exchanges() {
//   return <div className="p-5">거래소 페이지</div>;
// }

// function Login() {
//   return <div className="p-5">로그인 페이지</div>;
// }

// function Register() {
//   return <div className="p-5">회원가입 페이지</div>;
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-pw" element={<FindID />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-id" element={<FindPassword />} />
        <Route path="/join" element={<JoinMembership />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/notice" element={<NoticeSection />} />
      </Routes>
      <SupportSection/>
      <Footer />
    </Router>
  );
}

export default App;
