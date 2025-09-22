// lib/contentIndex.js

const content = [
  {
    id: 'about',
    title: 'About Our Company',
    description: 'Learn about our mission, vision, and the team.',
    keywords: ['about us', 'company', 'mission', 'vision', 'team'],
    path: '/about',
  },
  {
    id: 'services',
    title: 'Our Services',
    description: 'Explore the range of professional services we offer.',
    keywords: ['services', 'offerings', 'solutions', 'professional'],
    path: '/services',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with us via phone, email, or our office locations.',
    keywords: ['contact', 'email', 'phone', 'location', 'get in touch'],
    path: '/contact',
  },
  // Add more content objects for every page you want to be searchable
  {
    id: 'blog-post-1',
    title: 'A Guide to Next.js',
    description: 'An introductory guide to building web applications with Next.js.',
    keywords: ['next.js', 'guide', 'blog', 'development', 'react'],
    path: '/blog/a-guide-to-nextjs',
  },
];

export default content;