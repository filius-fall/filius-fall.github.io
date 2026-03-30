export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  value: string;
};

export const siteMeta = {
  name: 'Sreeram Ambalam',
  shortName: 'Sreeram',
  role: 'Python developer focused on backend systems, tooling, and technical writing.',
  location: 'Bengaluru, India',
  email: 'asreeram1729@gmail.com',
  github: 'https://github.com/filius-fall',
  twitter: 'https://twitter.com/filius_fall',
  resumeFile: 'Sreeram-A Resume.pdf',
};

export const navigation: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/resume/', label: 'Resume' },
  { href: '/contact/', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { href: `mailto:${siteMeta.email}`, label: 'Email', value: siteMeta.email },
  { href: siteMeta.github, label: 'GitHub', value: 'github.com/filius-fall' },
  { href: siteMeta.twitter, label: 'Twitter', value: '@filius_fall' },
];

export const capabilityCards = [
  {
    title: 'Backend systems',
    description: 'Python services, APIs, automation, and reliability-focused implementation.',
  },
  {
    title: 'Developer tooling',
    description: 'Tooling, workflows, and practical improvements to developer experience.',
  },
  {
    title: 'Technical writing',
    description: 'Clear writing on protocols, systems, and software behavior.',
  },
];

export const homepageSections = {
  intro: 'I build practical software and write about how systems actually behave.',
  currentFocus: [
    'Python services and automation',
    'Developer tooling',
    'Protocols and system behavior',
  ],
  recentWritingTitle: 'Recent blog posts',
};

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
