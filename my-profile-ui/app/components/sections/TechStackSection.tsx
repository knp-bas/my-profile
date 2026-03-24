"use client";

import { Tag } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import SectionHeading from "../ui/SectionHeading";
import { NAVY } from "../../lib/theme";

interface TechStackSectionProps {
  techStack: string[];
}

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section id="techstack" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <SectionHeading icon={<CodeOutlined />} title="Tech Stack" />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {techStack.map((tech) => (
            <Tag
              key={tech}
              style={{
                fontSize: 16,
                padding: "6px 18px",
                borderRadius: 20,
                border: `1px solid ${NAVY}22`,
                background: `${NAVY}08`,
                color: NAVY,
                fontWeight: 600,
                margin: 0,
                cursor: "default",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = NAVY;
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${NAVY}08`;
                (e.currentTarget as HTMLElement).style.color = NAVY;
              }}
            >
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
