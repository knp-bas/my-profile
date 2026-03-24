"use client";

import { useEffect, useState } from "react";
import { Layout, Button, Space, Tooltip, Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { NAVY, ACCENT } from "../../lib/theme";
import type { ContactInfo } from "../../types/profile";

const { Header } = Layout;
const { Text } = Typography;

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Tech Stack", id: "techstack" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
];

interface NavBarProps {
  name: string;
  contact: ContactInfo;
}

export default function NavBar({ name, contact }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? NAVY : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
        transition: "background-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Brand */}
      <Text
        style={{
          color: "#fff",
          fontWeight: 800,
          fontSize: 16,
          letterSpacing: 1,
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {name.split(" ")[0]}
        <span style={{ color: ACCENT }}>.</span>
      </Text>

      {/* Nav links */}
      <Space size={4} style={{ display: "flex" }}>
        {NAV_LINKS.map((link) => (
          <Button
            key={link.id}
            type="text"
            size="small"
            style={{ color: "#e2e8f0", fontWeight: 500, fontSize: 15 }}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </Button>
        ))}
      </Space>

      {/* Contact icons */}
      <Space size={8}>
        <Tooltip title={contact.phone}>
          <a href={`tel:${contact.phone}`}>
            <Button type="text" icon={<PhoneOutlined style={{ color: "#e2e8f0" }} />} />
          </a>
        </Tooltip>
        <Tooltip title={contact.email}>
          <a href={`mailto:${contact.email}`}>
            <Button type="text" icon={<MailOutlined style={{ color: "#e2e8f0" }} />} />
          </a>
        </Tooltip>
      </Space>
    </Header>
  );
}
