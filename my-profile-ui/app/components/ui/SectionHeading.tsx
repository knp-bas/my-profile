import { ACCENT } from "../../lib/theme";

interface SectionHeadingProps {
  icon: React.ReactNode;
  title: string;
}

export default function SectionHeading({ icon, title }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: 40, textAlign: "center" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: `${ACCENT}10`,
          color: ACCENT,
          padding: "6px 18px",
          borderRadius: 20,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {icon}
        {title}
      </div>
      <div
        style={{
          width: 48,
          height: 3,
          background: ACCENT,
          borderRadius: 2,
          margin: "0 auto",
        }}
      />
    </div>
  );
}
