 import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";
 
 export default function OKXVirtual() {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="mt-6">
          <span className="block text-sm font-medium text-indigo-600">
            가상자산 뉴스레터
          </span>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            OKX에 가입하기 전에 돈을 절약하는 방법
          </h1>

          <div className="text-sm text-gray-500 mt-4">24.08.02</div>

          <hr className="mt-6 border-gray-200" />
        </div>
        <div className="mt-10 w-full overflow-hidden rounded-xl relative group cursor-pointer">
  {/* Background Image */}
  <img
    src="/logos/solana-sol-logo.png"
    alt="OKX Video Banner"
    className="w-full h-auto object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

  {/* Play Button */}
  <a
    href="https://youtu.be/14HIIUjOLGY?si=4RweAZhYTibPReEr"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="   flex items-center justify-center hover:scale-110 transition">
  <img
    src="/logos/youtube.png"
    alt="YouTube"
    className=" md:w-50 md:h-50 object-contain"
  />
</div>

  </a>
</div>

        <hr className="mt-6 border-gray-200" />
        <div className="mt-10 flex justify-end items-center gap-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/notice/bingx-kyc-transfer")}
          >
            &#8249;
          </button>

          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/notice/tetherback-satisfaction")}
          >
            &#8250;
          </button>
        </div>
            </div>
        </Container>
    );
}