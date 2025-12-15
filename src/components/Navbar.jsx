import Container from "./Container";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <Container>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Crypto<span className="font-extrabold">Exchange</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#" className="hover:text-pink-500">
            서비스 소개
          </Link>
          <Link to="#" className="hover:text-pink-500">
            트레이딩 가이드
          </Link>
          <Link to="#" className="text-pink-500 font-semibold">
            수수료 환급 계산기
          </Link>
          <Link to="#" className="hover:text-pink-500">
            제휴 거래소 안내
          </Link>
        </nav>

        {/* Login Button */}
        <Link to="/login" className="border px-5 py-2 rounded text-sm hover:bg-gray-100">
          로그인
        </Link>
      </div>
      </Container>
    </header>
  );
}
