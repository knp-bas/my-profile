import { Typography } from "antd";
import { ACCENT } from "../../lib/theme";

const { Text } = Typography;

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "16px",
        background: "#fff",
        borderRadius: 10,
        border: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: `${ACCENT}12`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <Text
          type="secondary"
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            display: "block",
          }}
        >
          {label}
        </Text>
        <Text style={{ fontSize: 15, color: "#1e293b", wordBreak: "break-all" }}>
          {value}
        </Text>
      </div>
    </div>
  );
}
