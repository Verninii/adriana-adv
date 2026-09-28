import type { NavLink, SiteInfo, SocialLink } from '../types/content';

export const siteInfo: SiteInfo = {
  name: 'Dra. Adriana Marcondes',
  tagline: 'Soluções Fiscais',
  logoAlt: 'Adriana Marcondes — Soluções Fiscais',
  summary:
    'Advocacia tributária dedicada à defesa de empresários e empresas em execuções fiscais, negociações com o Fisco e preservação patrimonial.',
  role: 'Especialista em soluções tributárias',
  whatsappNumber: '5511947544718',
  whatsappMessage: 'Olá! Gostaria de agendar uma consulta sobre minha situação fiscal.',
  phone: '(11) 94754-4718',
  email: 'amsfiscais@gmail.com',
  street: 'Rua Ângelo Airoldi, 91',
  city: 'Jandira — SP',
  hours: 'Seg a sex, 8:30h às 17h',
};

export const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

const mapQuery = encodeURIComponent(`${siteInfo.street}, Jandira, SP`);

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&hl=pt-BR&z=16&output=embed`;

export const navLinks: readonly NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
];

export const socialLinks: readonly SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/amsfiscais', icon: 'instagram' },
  { label: 'WhatsApp', href: whatsappUrl, icon: 'whatsapp' },
];
