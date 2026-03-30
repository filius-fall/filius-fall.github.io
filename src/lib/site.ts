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
  role: 'Python developer building dependable systems, thoughtful interfaces, and clear technical writing.',
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
    description: 'Python-first application work, APIs, automation, and the kind of implementation detail that keeps software calm under load.',
  },
  {
    title: 'Open source curiosity',
    description: 'I like reading code, understanding design tradeoffs, and contributing to tools that make developers more effective.',
  },
  {
    title: 'Technical writing',
    description: 'I write to make difficult systems easier to reason about, especially where protocols, networking, and architecture get fuzzy.',
  },
];

export const homepageSections = {
  intro: 'I care about software that is practical, readable, and built with enough rigor to stay useful after the first demo.',
  currentFocus: [
    'Python services and automation',
    'Developer tooling and open source',
    'Networking, systems, and protocol deep dives',
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
