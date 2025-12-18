import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

export default function BINGX() {
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
            [BINGX] KYC 이전 방법
          </h1>

          <div className="text-sm text-gray-500 mt-4">24.06.22</div>

          <hr className="mt-6 border-gray-200" />
        </div>

        {/* Banner Image */}
        <div className="mt-10 w-full h-100 flex justify-center overflow-hidden rounded-xl">
          <img
            src="/logos/ethereum-eth-logo.svg"
            alt="Bitget Notice Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        <hr className="mt-6 border-gray-200" />
        <div className="mt-10 flex justify-end items-center gap-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/notice/okx-kyc-removal")}
          >
            &#8249;
          </button>

          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100"
            onClick={() => navigate("/notice/bitget-api-changes")}
          >
            &#8250;
          </button>
        </div>

      </div>
    </Container>
  );
}
