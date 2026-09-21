import type { NavLink, SiteInfo } from '../types/content';

export const siteInfo: SiteInfo = {
  name: 'Adriana Marcondes',
  tagline: 'Soluções Fiscais',
  logoAlt: 'Adriana Marcondes — Soluções Fiscais',
  role: 'Especialista em soluções tributárias',
  whatsappNumber: '5511947544718',
  whatsappMessage: 'Olá! Gostaria de agendar uma consulta sobre minha situação fiscal.',
};

export const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

export const navLinks: readonly NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
];

export const footerLinks: readonly NavLink[] = [
  { label: 'Condições e suporte', href: '#' },
  { label: 'Política de Privacidade', href: '#' },
];
