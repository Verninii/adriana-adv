export type IconName = 'shield' | 'trending-down' | 'handshake' | 'lock';

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
  icon: IconName;
  mark: string;
  title: string;
  description: string;
}

export interface Credential {
  value: string;
  label: string;
}
