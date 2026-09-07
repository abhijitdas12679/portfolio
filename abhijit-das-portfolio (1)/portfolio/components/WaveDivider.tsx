export default function WaveDivider({
  flip = false,
  color = "#090D16",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ height: 24, transform: flip ? "scaleY(-1)" : undefined }}
      className="block w-full"
    >
      <path d="M0,32 C480,90 960,-10 1440,32 L1440,60 L0,60 Z" fill={color} />
    </svg>
  );
}
