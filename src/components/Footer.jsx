import Container from "./Container";
export default function Footer() {
  return (
    
    <footer className="bg-gray-100 text-gray-800 py-10">
    <Container>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        {/* Left: Company Info */}
        <div className="text-sm md:text-base space-y-2">
          <div className="font-bold text-lg md:text-xl">크립토 익스체인지 로고</div>
          {/* <p>HippoK Menon 주식회사 | 대표이사: 최효석</p> */}
          <p>주소: </p>
          <p>통신판매업신고번호: </p>
          <p>카카오톡: @cryptoexchange | 운영시간: 10:00 - 19:00 (점심시간: 13:00 - 14:00)</p>
          <p>이메일: cryptoexchangehelp@gmail.com</p>
        </div>

        {/* Right: Terms / Privacy */}
        {/* <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
          <a href="/terms" className="hover:underline">이용약관</a>
          <a href="/privacy" className="hover:underline">개인정보처리방침</a>
        </div> */}
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-gray-500 text-sm">
        Copyright ⓒ 2024 크립토 익스체인지
      </div>
      </Container>
    </footer>
  );
}
