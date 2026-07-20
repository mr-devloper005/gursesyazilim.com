import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Classified products, services, rentals, and opportunities',
      description: 'Discover classified products, services, rentals, roles, and timely offers on gursesyazilim.',
      openGraphTitle: 'Find useful classified opportunities',
      openGraphDescription: 'Browse clear classified offers for products, services, roles, rentals, and more.',
      keywords: ['classified listings', 'services', 'jobs', 'rentals', 'products for sale'],
    },
    hero: {
      badge: 'Opportunity meets credibility',
      title: ['Find what you need.', 'Show what you do.'],
      description: 'Explore classified offers, services, rentals, roles, products, and local opportunities.',
      primaryCta: { label: 'Browse classified', href: '/classified' },
      secondaryCta: { label: 'Post an offer', href: '/create' },
      searchPlaceholder: 'Search services, products, roles, or people',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
      title: 'A clearer way to find opportunities and build trust.',
    description: `${slot4BrandConfig.siteName} connects practical classified discovery with credible professional profiles.`,
    paragraphs: [
      'People can browse relevant offers, services, roles, and rentals with the details needed to make informed decisions.',
      'Profiles give individuals and organizations room to present their experience, identity, and work with clarity.',
    ],
    values: [
      {
        title: 'Useful classified discovery',
        description: 'Clear categories and focused details help people find relevant offers without noise.',
      },
      {
        title: 'Credible professional presence',
        description: 'Profiles help people and organizations share expertise and build confidence before connecting.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful content faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'How can we help you make the right connection?',
    description: 'Contact us about a classified post, profile, account, or general site question.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find offers, services, and professional profiles.',
      description: 'Search classified opportunities and profiles by keyword, category, or title.',
      placeholder: 'Search by service, product, role, person, or category',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a classified or professional profile.',
      description: 'Choose a post type and add the useful details, images, links, summary, and description people need.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the publishing workspace, save details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
