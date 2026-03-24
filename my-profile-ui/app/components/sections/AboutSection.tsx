import { Row, Col, Divider, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SectionHeading from "../ui/SectionHeading";
import ContactItem from "../ui/ContactItem";
import { ACCENT } from "../../lib/theme";
import type { ContactInfo } from "../../types/profile";

const { Paragraph } = Typography;

interface AboutSectionProps {
  about: string;
  contact: ContactInfo;
}

export default function AboutSection({ about, contact }: AboutSectionProps) {
  return (
    <section id="about" style={{ background: "#f8fafc", padding: "96px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <SectionHeading icon={<UserOutlined />} title="About Me" />
        <Paragraph
          style={{
            fontSize: 18,
            lineHeight: 2,
            color: "#475569",
            marginBottom: 0,
          }}
        >
          {about}
        </Paragraph>

        <Divider style={{ margin: "40px 0 32px" }} />

        <Row gutter={[32, 16]}>
          <Col xs={24} sm={8}>
            <ContactItem
              icon={<PhoneOutlined style={{ color: ACCENT }} />}
              label="Phone"
              value={contact.phone}
            />
          </Col>
          <Col xs={24} sm={8}>
            <ContactItem
              icon={<MailOutlined style={{ color: ACCENT }} />}
              label="Email"
              value={contact.email}
            />
          </Col>
          <Col xs={24} sm={8}>
            <ContactItem
              icon={<EnvironmentOutlined style={{ color: ACCENT }} />}
              label="Location"
              value={contact.location}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
