const logos = [
  { src: "/logos/bitcoin-btc-logo.png", name: "Bitcoin" },
  { src: "/logos/bitunix.png", name: "Bnb" },
  { src: "/logos/dogecoin-doge-logo.png", name: "Dogecoin" },
  { src: "/logos/ethereum-eth-logo.svg", name: "Ethereum" },
  { src: "/logos/solana-sol-logo.png", name: "Solana" },
  { src: "/logos/tether-usdt-logo.png", name: "Tether" },
  { src: "/logos/xrp-xrp-logo.png", name: "Xrp" },
];

export default function LogoRow() {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-marquee gap-8">
        {/* Duplicate logos for infinite scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
            <img src={logo.src} alt={logo.name} className="w-12 h-12 object-contain" />
            <span className="text-sm text-center">{logo.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 5s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
