"use client";

import { Button, Space, Tag, Typography } from "antd";
import { ArrowDownOutlined, MailOutlined } from "@ant-design/icons";
import { NAVY, NAVY_LIGHT, ACCENT } from "../../lib/theme";

const { Title, Text } = Typography;

interface HeroSectionProps {
  name: string;
  title: string;
  email: string;
}

export default function HeroSection({ name, title, email }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 60%, #1e3a6e 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.08)",
          top: -100,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.06)",
          bottom: 40,
          left: -80,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 720 }}>
        <Tag
          color={ACCENT}
          style={{
            marginBottom: 20,
            padding: "4px 16px",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            border: "none",
            borderRadius: 20,
          }}
        >
          {title}
        </Tag>

        <Title
          level={1}
          style={{
            color: "#ffffff",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            margin: "0 0 8px",
            lineHeight: 1.1,
            letterSpacing: -1,
          }}
        >
          {name}
        </Title>

        <Text
          style={{
            color: "#93c5fd",
            fontSize: 18,
            display: "block",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Backend-focused developer · SQL &amp; API specialist · CI/CD
        </Text>

        <Space size={16} wrap style={{ justifyContent: "center" }}>
          <Button
            type="primary"
            size="large"
            icon={<MailOutlined />}
            href={`mailto:${email}`}
            style={{
              background: ACCENT,
              borderColor: ACCENT,
              borderRadius: 8,
              fontWeight: 600,
              height: 48,
              padding: "0 28px",
            }}
          >
            Contact Me
          </Button>
          <Button
            ghost
            size="large"
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              height: 48,
              padding: "0 28px",
            }}
            onClick={() => scrollTo("experience")}
          >
            View Experience
          </Button>
        </Space>

        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.3)",
            cursor: "pointer",
            animation: "bounce 2s infinite",
          }}
          onClick={() => scrollTo("about")}
        >
          <ArrowDownOutlined style={{ fontSize: 20 }} />
        </div>
      </div>
    </section>
  );
}
