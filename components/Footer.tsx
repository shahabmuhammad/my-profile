export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <div
        className="max-w-[1160px] mx-auto px-[clamp(18px,4vw,28px)] py-[26px] flex flex-wrap gap-3.5 justify-between font-[family-name:var(--font-jetbrains-mono)] text-[11.5px]"
        style={{ color: "var(--faint)" }}
      >
        <span>© 2026 Muhammad Shahab</span>
        <span>Islamabad, Pakistan · UTC+5</span>
      </div>
    </footer>
  );
}
