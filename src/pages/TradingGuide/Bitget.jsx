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
            비트겟 API 거래 및 카피트레이딩 환급률 변경 안내
          </h1>

          <div className="text-sm text-gray-500 mt-4">25.10.10</div>

          <hr className="mt-6 border-gray-200" />
        </div>

        {/* Banner Image */}
        <div className="mt-10 w-full h-100 flex justify-center overflow-hidden rounded-xl">
          <img
            src="/logos/bitunix.png"
            alt="Bitget Notice Banner"
            className="h-auto max-w-full object-cover"
          />
        </div>

        <div className="mt-10 text-center">
          <h1 className="mt-10 text-2xl font-bold text-gray-900">
            안녕하세요, 여기는{" "}
            <span className="text-[rgb(198,99,196)]">CryptoExchange</span>
            입니다.
          </h1>
          <p className="font-semibold">2025년 10월 10일부터 트렌딩 중</p>
          <p className="font-semibold">
            Bitget의
            <span className="text-[rgb(198,99,196)] font-semibold">
              API 트레이딩 및 카피 트레이딩 환불율
            </span>
            은<span className="text-[rgb(198,99,196)] font-semibold">48%</span>
            로 조정됩니다.
          </p>
          <p className="text-center text-base font-semibold">
            서비스 이용 시 혼동을 피하기 위해 반드시 확인해 주세요. <br />
            <span className="text-[rgb(198,99,196)] font-semibold">
              Tetherback
            </span>
            은 최상의 거래 환경을 제공하기 위해 계속 노력할 것입니다. <br />
            감사합니다.
          </p>
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
