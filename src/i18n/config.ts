export const defaultLang = 'en';
export const showDefaultLang = false;

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

// Post slug mappings between languages
// This maps English slugs to their Spanish equivalents and vice versa
export const postSlugMappings: Record<string, Record<string, string>> = {
  'en-welcome': { es: 'es-bienvenido' },
  'es-bienvenido': { en: 'en-welcome' },
  // Add more mappings as you create more posts
  // Format: 'english-slug': { es: 'spanish-slug' }
  // Format: 'spanish-slug': { en: 'english-slug' }
};

export function getPostSlugMapping(currentSlug: string, targetLang: string): string | null {
  // Check if we have a direct mapping for this slug
  if (postSlugMappings[currentSlug] && postSlugMappings[currentSlug][targetLang]) {
    return postSlugMappings[currentSlug][targetLang];
  }
  
  // If no mapping found, return null (will fall back to homepage)
  return null;
}

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.topics': 'Topics',
    'nav.newsletter': 'Newsletter',
    'nav.search': 'Search',
    'nav.language': 'Language',
    'footer.copyright': 'Built with Astro',
    'footer.rss': 'RSS',
    'blog.featured': 'Featured Posts',
    'blog.latest': 'Latest Posts',
    'blog.allPosts': 'All Posts',
    'blog.viewAll': 'View All Posts',
    'blog.readMore': 'Read More',
    'blog.minRead': 'min read',
    'blog.by': 'by',
    'blog.backToBlog': 'Back to Blog',
    'blog.joinConversation': 'Join the Conversation',
    'topics.browseBy': 'Browse by Topic',
    'topics.findWhat': 'Find what interests you',
    'topics.posts': 'posts',
    'topics.latest': 'Latest:',
    'topics.viewAll': 'View all',
    'topics.noPosts': 'No posts yet',
    'topics.checkBack': 'Check back soon!',
    'topics.browseOther': 'Browse Other Topics',
    'newsletter.join': 'Join the newsletter',
    'newsletter.description': 'Get new posts and updates. No spam, just my thoughts.',
    'newsletter.title': 'Join the Scripted Newsletter',
    'newsletter.subtitle': 'Get notified about new blog posts and whatever else I\'m thinking about.',
    'newsletter.noSpam': 'No spam, unsubscribe anytime.',
    'search.placeholder': 'Search posts...',
    'search.noResults': 'No results found',
    'search.results': 'results found',
    'home.hero.title': 'Welcome to',
    'home.hero.subtitle': 'A personal blog where I share thoughts, experiences, and whatever interests me. A place to write, think, and entertain.',
    'home.hero.readBlog': 'Read the Blog',
    'home.hero.joinNewsletter': 'Join Newsletter',
    'home.featured.title': 'Featured Posts',
    'home.featured.subtitle': 'Posts I think are worth highlighting',
    'home.latest.title': 'Latest Posts',
    'home.latest.subtitle': 'Recent thoughts and writings',
    'home.about.title': 'About Scripted',
    'home.about.description': 'This is a personal blog where I write about whatever interests me. It\'s a place to share thoughts, experiences, and maybe entertain a few people along the way. No fancy marketing, just honest writing.',
    'home.about.personal': 'Personal',
    'home.about.personalDesc': 'My thoughts & experiences',
    'home.about.honest': 'Honest',
    'home.about.honestDesc': 'Real writing, no fluff',
    'home.about.entertaining': 'Entertaining',
    'home.about.entertainingDesc': 'Hopefully interesting to read',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.topics': 'Temas',
    'nav.newsletter': 'Boletín',
    'nav.search': 'Buscar',
    'nav.language': 'Idioma',
    'footer.copyright': 'Construido con Astro',
    'footer.rss': 'RSS',
    'blog.featured': 'Posts Destacados',
    'blog.latest': 'Posts Recientes',
    'blog.allPosts': 'Todos los Posts',
    'blog.viewAll': 'Ver Todos los Posts',
    'blog.readMore': 'Leer Más',
    'blog.minRead': 'min de lectura',
    'blog.by': 'por',
    'blog.backToBlog': 'Volver al Blog',
    'blog.joinConversation': 'Únete a la Conversación',
    'topics.browseBy': 'Explorar por Tema',
    'topics.findWhat': 'Encuentra lo que te interesa',
    'topics.posts': 'posts',
    'topics.latest': 'Más reciente:',
    'topics.viewAll': 'Ver todos',
    'topics.noPosts': 'Aún no hay posts',
    'topics.checkBack': '¡Vuelve pronto!',
    'topics.browseOther': 'Explorar Otros Temas',
    'newsletter.join': 'Únete al boletín',
    'newsletter.description': 'Recibe nuevos posts y actualizaciones. Sin spam, solo mis pensamientos.',
    'newsletter.title': 'Únete al Boletín de Scripted',
    'newsletter.subtitle': 'Recibe notificaciones sobre nuevos posts y lo que esté pensando.',
    'newsletter.noSpam': 'Sin spam, cancela cuando quieras.',
    'search.placeholder': 'Buscar posts...',
    'search.noResults': 'No se encontraron resultados',
    'search.results': 'resultados encontrados',
    'home.hero.title': 'Bienvenido a',
    'home.hero.subtitle': 'Un blog personal donde comparto pensamientos, experiencias y lo que me interesa. Un lugar para escribir, pensar y entretener.',
    'home.hero.readBlog': 'Leer el Blog',
    'home.hero.joinNewsletter': 'Unirse al Boletín',
    'home.featured.title': 'Posts Destacados',
    'home.featured.subtitle': 'Posts que creo que valen la pena destacar',
    'home.latest.title': 'Posts Recientes',
    'home.latest.subtitle': 'Pensamientos y escritos recientes',
    'home.about.title': 'Acerca de Scripted',
    'home.about.description': 'Este es un blog personal donde escribo sobre lo que me interesa. Es un lugar para compartir pensamientos, experiencias y tal vez entretener a algunas personas en el camino. Sin marketing elegante, solo escritura honesta.',
    'home.about.personal': 'Personal',
    'home.about.personalDesc': 'Mis pensamientos y experiencias',
    'home.about.honest': 'Honesto',
    'home.about.honestDesc': 'Escritura real, sin relleno',
    'home.about.entertaining': 'Entretenido',
    'home.about.entertainingDesc': 'Ojalá sea interesante de leer',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRelativeUrl(url: URL, lang: string) {
  const [, ...pathSegments] = url.pathname.split('/');
  const currentLang = getLangFromUrl(url);
  
  if (currentLang === lang) return url.pathname;
  
  // Handle blog post language switching
  if (pathSegments.length >= 3 && pathSegments[1] === 'blog') {
    const currentSlug = pathSegments[2];
    const mappedSlug = getPostSlugMapping(currentSlug, lang);
    
    if (mappedSlug) {
      // Always use the language prefix for blog posts to avoid redirects
      return `/${lang}/blog/${mappedSlug}/`;
    } else {
      // If no mapping found, redirect to the blog index in the target language
      return `/${lang}/blog/`;
    }
  }
  
  // Handle blog index language switching
  if (pathSegments.length >= 2 && pathSegments[1] === 'blog') {
    return `/${lang}/blog/`;
  }
  
  // Handle topics language switching
  if (pathSegments.length >= 2 && pathSegments[1] === 'topics') {
    return `/${lang}/topics/`;
  }
  
  // Handle newsletter language switching
  if (pathSegments.length >= 2 && pathSegments[1] === 'newsletter') {
    return `/${lang}/newsletter/`;
  }
  
  // Handle root-only pages (topics, newsletter) - these don't have language versions
  // so we should redirect to the homepage in the target language
  if (pathSegments.length >= 1 && ['topics', 'newsletter'].includes(pathSegments[0])) {
    if (lang === defaultLang && !showDefaultLang) {
      return '/';
    }
    return `/${lang}/`;
  }
  
  // Handle other pages (homepage, etc.)
  if (lang === defaultLang && !showDefaultLang) {
    return '/' + pathSegments.slice(1).join('/');
  }
  
  return '/' + lang + '/' + pathSegments.slice(1).join('/');
}
