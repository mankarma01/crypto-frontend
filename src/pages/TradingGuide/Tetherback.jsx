import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
export default function Bitget() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header Content */}
        <div className="mt-6">
          <span className="block text-sm font-medium text-indigo-600">
            거래소 튜토리얼
          </span>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            테더백 만족도 조사
          </h1>

          <div className="text-sm text-gray-500 mt-4">19.09.19</div>

          <hr className="mt-6 border-gray-200" />
        </div>

        {/* Banner Image */}
        <div className="mt-10 w-full h-100 flex justify-center overflow-hidden rounded-xl">
          <img
            src="/logos/bitcoin-btc-logo.png"
            alt="Bitget Notice Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-center max-w-2xl mx-auto mt-10 p-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">
            안녕하세요, 이것은{" "}
            <span className="text-[rgb(198,99,196)]">Tetherback</span>입니다.
          </h1>

          <p className="text-gray-700 mb-2 font-semibold">
            지금까지 <span className="text-[rgb(198,99,196)]">Tetherback</span>
            과 함께 해주신 모든 분들께 감사드립니다.
          </p>
          <p className="text-gray-700 mb-2 font-semibold">
            트레이더에게 보다 편리하고 더 나은 서비스를 제공하기 위해
          </p>
          <p className="text-gray-700 mb-6 font-semibold">
            <span className="text-[rgb(198,99,196)]">
              Tetherback 만족도 설문조사
            </span>
            를 진행하고 있습니다.
          </p>
          <p className="text-gray-700 mb-6 font-semibold">
            바쁘시겠지만, 참여 부탁드립니다!
          </p>

          <a
            href="#"
            className="text-[rgb(198,99,196)] font-bold text-lg md:text-xl underline"
          >
            Tetherback 만족도 설문조사 시작하기
          </a>
        </div>

        <hr className="mt-6 border-gray-200" />
        <div className="mt-10 flex justify-end items-center gap-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/notice/bitget-api-changes")}
          >
            &#8249;
          </button>

          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/notice/okx-kyc-removal")}
          >
            &#8250;
          </button>
        </div>
      </div>
    </Container>
  );
}
