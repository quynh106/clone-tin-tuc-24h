export default function Avatar({ name = "", size = 32 }) {
  const letter = name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() ?? "?";
  const hue = [...name].reduce((h, c) => h + c.charCodeAt(0), 0) % 360;
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: `hsl(${hue},45%,45%)`,
        color: "#fff",
        fontWeight: 700,
        fontSize: size * 0.45,
      }}
    >
      {letter}
    </span>
  );
}
