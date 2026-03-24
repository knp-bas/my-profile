import { Typography } from "antd";
import { NAVY } from "../../lib/theme";

const { Text } = Typography;

interface FooterSectionProps {
  name: string;
  email: string;
  location: string;
}

export default function FooterSection({ name, email, location }: FooterSectionProps) {
  return (
    <footer
      style={{
        background: NAVY,
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
        {name} · {email} · {location}
      </Text>
    </footer>
  );
}
