import { Row, Col, Card, Tag, Typography } from "antd";
import { BookOutlined, GlobalOutlined } from "@ant-design/icons";
import SectionHeading from "../ui/SectionHeading";
import { NAVY, ACCENT } from "../../lib/theme";
import type { Education, Language } from "../../types/profile";

const { Text } = Typography;

interface EducationSectionProps {
  education: Education[];
  languages: Language[];
}

export default function EducationSection({ education, languages }: EducationSectionProps) {
  return (
    <section id="education" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Row gutter={[48, 48]}>
          {/* Education */}
          <Col xs={24} md={14}>
            <SectionHeading icon={<BookOutlined />} title="Education" />
            {education.map((edu, i) => (
              <Card
                key={i}
                bordered={false}
                style={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  borderRadius: 12,
                  marginBottom: 16,
                }}
                styles={{ body: { padding: "20px 24px" } }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <Text
                    strong
                    style={{
                      fontSize: 16,
                      color: NAVY,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    {edu.institution}
                  </Text>
                  <Tag
                    style={{
                      borderRadius: 12,
                      fontSize: 13,
                      fontWeight: 600,
                      border: `1px solid ${NAVY}33`,
                      color: NAVY,
                      background: `${NAVY}0a`,
                    }}
                  >
                    {edu.period}
                  </Tag>
                </div>
                <Text style={{ fontSize: 15, color: "#475569" }}>{edu.degree}</Text>
                {edu.gpa && (
                  <div style={{ marginTop: 8 }}>
                    <Tag
                      color={ACCENT}
                      style={{ borderRadius: 12, fontWeight: 600, border: "none" }}
                    >
                      GPA {edu.gpa}
                    </Tag>
                  </div>
                )}
              </Card>
            ))}
          </Col>

          {/* Languages */}
          <Col xs={24} md={10}>
            <SectionHeading icon={<GlobalOutlined />} title="Languages" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderRadius: 10,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <Text strong style={{ color: NAVY, fontSize: 16 }}>
                    {lang.name}
                  </Text>
                  <Tag
                    style={{
                      borderRadius: 12,
                      fontSize: 13,
                      fontWeight: 600,
                      border: `1px solid ${ACCENT}44`,
                      color: ACCENT,
                      background: `${ACCENT}0f`,
                      margin: 0,
                    }}
                  >
                    {lang.level}
                  </Tag>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
