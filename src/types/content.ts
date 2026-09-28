export type IconName =
  | 'shield'
  | 'trending-down'
  | 'handshake'
  | 'lock'
  | 'whatsapp'
  | 'instagram'
  | 'arrow-right';

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  summary: string;
  logoAlt: string;
  role: string;
  whatsappNumber: string;
  whatsappMessage: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  hours: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface PracticeArea {
  icon: IconName;
  mark: string;
  title: string;
  description: string;
}

export interface Credential {
  value: string;
  label: string;
}
