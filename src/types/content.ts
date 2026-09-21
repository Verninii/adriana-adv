export interface NavLink {
  label: string;
  href: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  logoAlt: string;
  role: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

export interface PracticeArea {
  mark: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Credential {
  value: string;
  label: string;
}
