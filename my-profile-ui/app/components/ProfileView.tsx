"use client";

import { ConfigProvider, Layout } from "antd";
import { themeConfig } from "../lib/theme";
import { ProfileResponse } from "../types/profile";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import FooterSection from "./sections/FooterSection";

const { Content } = Layout;

interface ProfileViewProps {
  profile: ProfileResponse;
}

export default function ProfileView({ profile }: ProfileViewProps) {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ background: "#fff" }}>
        <NavBar name={profile.name} contact={profile.contact} />
        <Content>
          <HeroSection
            name={profile.name}
            title={profile.title}
            email={profile.contact.email}
          />
          <AboutSection about={profile.about} contact={profile.contact} />
          <TechStackSection techStack={profile.techStack} />
          <ExperienceSection workExperiences={profile.workExperiences} />
          <EducationSection
            education={profile.education}
            languages={profile.languages}
          />
          <FooterSection
            name={profile.name}
            email={profile.contact.email}
            location={profile.contact.location}
          />
        </Content>
      </Layout>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </ConfigProvider>
  );
}
