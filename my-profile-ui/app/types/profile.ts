export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface WorkExperience {
  company: string;
  period: string;
  position: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  period: string;
  degree: string;
  gpa: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ProfileResponse {
  name: string;
  title: string;
  about: string;
  contact: ContactInfo;
  techStack: string[];
  workExperiences: WorkExperience[];
  education: Education[];
  languages: Language[];
}
