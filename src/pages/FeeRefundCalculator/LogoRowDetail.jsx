import React from "react";

export default function RefundCalculator() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-30">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-7">
        <button className="px-3 py-2 border rounded">환급정책</button>
        <button className="px-3 py-2 rounded bg-pink-500 text-white font-semibold">환급액 계산</button>
        <button className="px-3 py-2 border rounded">환급 확인방법</button>
        <button className="px-3 py-2 border rounded">이벤트</button>
        <button className="px-3 py-2 border rounded">상담</button>
      </div>

      {/* Refund Info */}
      <div className="flex justify-center items-center gap-4 text-lg font-semibold mb-8 border-b border-gray-300 pb-8">
        
        <div className="flex gap-1 items-center">
          <span>환급률 (%)</span>
          <span className="text-pink-500 font-bold">56%</span>
        </div>
        <span>|</span>
        <div className="flex gap-1 items-center">
          <span>거래 할인율 (%)</span>
          <span className="text-blue-700 font-semibold">마감</span>
        </div>
      </div>
      <div className="pb-4">
        <h1 className="font-semibold text-lg">OKX 환급 정책</h1>
      </div>

      {/* OKX Refund Policy */}
      <div className="grid grid-cols-4 gap-4 text-center border rounded p-4 mb-6">
        <div>
          <div className="font-semibold mb-1">환급 자산</div>
          <div className="flex justify-center items-center gap-1">
            USDT <span className="text-green-500 font-bold">🟢</span>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-1">환급률</div>
          <div className="text-pink-500 font-bold text-lg">56%</div>
        </div>

        <div>
          <div className="font-semibold mb-1">수수료율 (%)</div>
          <div className="text-sm">
            지정가 <span className="line-through text-gray-400">0.02%</span> 0.008%<br />
            시장가 <span className="line-through text-gray-400">0.05%</span> 0.022%
          </div>
        </div>

        <div>
          <div className="font-semibold mb-1">정산 시간</div>
          <div className="text-sm">
            매일 17시(KR)<br />
            15시까지 환급 신청 시, 당일 정산
          </div>
        </div>
      </div>

      {/* Join Button */}
      <div className="text-center">
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          OKX 가입하기
        </button>
      </div>
    </div>
  );
}
