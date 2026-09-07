export default function GradientOrbs({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  if (variant === "dark") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] animate-float rounded-full bg-indigo/40 blur-[110px]" />
        <div className="absolute -right-20 top-10 h-[380px] w-[380px] animate-floatSlow rounded-full bg-teal/30 blur-[110px]" />
        <div className="absolute bottom-[-160px] left-1/3 h-[460px] w-[460px] animate-float rounded-full bg-accent/25 blur-[130px]" />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-32 -top-32 h-[360px] w-[360px] animate-floatSlow rounded-full bg-indigo/10 blur-[100px]" />
      <div className="absolute -left-24 bottom-[-120px] h-[320px] w-[320px] animate-float rounded-full bg-teal/10 blur-[100px]" />
    </div>
  );
}
