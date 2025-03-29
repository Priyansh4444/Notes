import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Pronsh/Notes',
  locale: 'en-US',
  description:
    'Opinionted, Biased notes on what I have percieved in life hoping to grow from these experiences and reflect on my learnings!',
  href: 'https://pronsh.vercel.app',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Priyansh4444',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/pronsh4444',
    label: 'Twitter',
  },
  {
    href: 'mailto:priyanshpokemon@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
