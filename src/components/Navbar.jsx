import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";

export default function Navbar({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/");
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <Container>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Crypto<span className="font-extrabold">Exchange</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/brand" className="hover:text-pink-500">
              서비스 소개
            </Link>
            <Link to="/notice" className="hover:text-pink-500">
              트레이딩 가이드
            </Link>
            <Link to="/refund" className="hover:text-pink-500 font-semibold">
              수수료 환급 계산기
            </Link>
            <Link
              to="/official-affiliate-exchanges"
              className="hover:text-pink-500 font-semibold"
            >
              공식 제휴 거래소
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:block">
            {isAuth ? (
              <Link
                to="/profile"
                className="border px-5 py-2 rounded text-sm hover:bg-gray-100"
              >
                내 프로필
              </Link>
            ) : (
              <Link
                to="/login"
                className="border px-5 py-2 rounded text-sm hover:bg-gray-100"
              >
                로그인
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden border px-3 py-2 rounded text-sm"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 text-sm flex flex-col gap-4">

            <Link
              to="/brand"
              onClick={() => setOpen(false)}
              className="block"
            >
              서비스 소개
            </Link>

            <Link
              to="/notice"
              onClick={() => setOpen(false)}
              className="block"
            >
              트레이딩 가이드
            </Link>

            <Link
              to="/refund"
              onClick={() => setOpen(false)}
              className="block"
            >
              수수료 환급 계산기
            </Link>

            <Link
              to="/official-affiliate-exchanges"
              onClick={() => setOpen(false)}
              className="block"
            >
              공식 제휴 거래소
            </Link>

            <hr />

            {isAuth ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  내 프로필
                </Link>

                <button
                  onClick={handleLogout}
                  className="block text-left text-red-500 w-full"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block"
              >
                로그인
              </Link>
            )}
          </div>
        )}
      </Container>
    </header>
  );
}
