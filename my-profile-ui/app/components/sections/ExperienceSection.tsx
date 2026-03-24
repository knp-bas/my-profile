import { Timeline, Card, Tag, Typography } from "antd";
import { HistoryOutlined, CheckCircleOutlined } from "@ant-design/icons";
import SectionHeading from "../ui/SectionHeading";
import { NAVY, ACCENT } from "../../lib/theme";
import type { WorkExperience } from "../../types/profile";

const { Text } = Typography;

interface ExperienceSectionProps {
  workExperiences: WorkExperience[];
}

export default function ExperienceSection({ workExperiences }: ExperienceSectionProps) {
  return (
    <section id="experience" style={{ background: "#f8fafc", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeading icon={<HistoryOutlined />} title="Work Experience" />
        <Timeline
          mode="left"
          items={workExperiences.map((exp) => ({
            color: ACCENT,
            label: (
              <Text type="secondary" style={{ fontSize: 12, fontWeight: 600 }}>
                {exp.period}
              </Text>
            ),
            children: (
              <Card
                bordered={false}
                style={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  borderRadius: 12,
                  marginBottom: 24,
                }}
                styles={{ body: { padding: "32px 40px" } }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <Text strong style={{ fontSize: 22, color: NAVY }}>
                    {exp.company}
                  </Text>
                  <Tag
                    color={ACCENT}
                    style={{ borderRadius: 12, fontWeight: 600, fontSize: 14, border: "none" }}
                  >
                    {exp.period}
                  </Tag>
                </div>
                <Text
                  style={{
                    display: "block",
                    color: ACCENT,
                    fontWeight: 600,
                    fontSize: 17,
                    marginBottom: 16,
                  }}
                >
                  {exp.position}
                </Text>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.responsibilities.map((r, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckCircleOutlined
                        style={{ color: ACCENT, fontSize: 16, marginTop: 3, flexShrink: 0 }}
                      />
                      <span style={{ fontSize: 16, lineHeight: 1.8, color: "#475569" }}>{r}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ),
          }))}
        />
      </div>
    </section>
  );
}
