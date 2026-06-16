import TradingCollage from "./TradingCollage";

const trading: string[] = [
  "/trading/FTMO.jpeg",
  "/trading/FN1.jpg",
  "/trading/FN2.jpg",
  "/trading/ACG1.png",
  "/trading/ACG2.png",
  "/trading/ACG3.png",
  "/trading/ACG4.png",
  "/trading/ACG5.png",
  "/trading/ACG6.png",
];

export default function TradingCertifications() {
  return (
    <section id="trading" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-3">
        Trading Certifications
      </h2>
      <p className="text-xs text-[var(--text-muted)] mb-8 max-w-2xl leading-relaxed">
        In addition to my work in technology, I actively pursue proprietary trading and have successfully passed multiple prop firm challenges. These certifications demonstrate my proficiency in risk management, market analysis, and maintaining consistent trading performance under professional trading standards.
      </p>
      <TradingCollage images={trading} />
    </section>
  );
}
