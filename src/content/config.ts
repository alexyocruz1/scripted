import { defineCollection, z } from "astro:content";

// Define the main topics/categories
export const TOPICS = {
  MOVIES: "movies",
  BOOKS: "books", 
  DEVELOPMENT: "development",
  WRITING: "writing",
  PERSONAL: "personal",
  REVIEWS: "reviews",
  TOURISM: "tourism"
} as const;

// Topic metadata for display and organization
export const TOPIC_METADATA = {
  [TOPICS.MOVIES]: {
    name: "Movies & TV",
    description: "Movie reviews, TV show thoughts, and entertainment",
    color: "bg-red-100 text-red-700",
    icon: "🎬",
    hashtags: ["#movies", "#tv", "#entertainment", "#reviews"]
  },
  [TOPICS.BOOKS]: {
    name: "Books & Reading",
    description: "Book reviews, reading thoughts, and literature",
    color: "bg-blue-100 text-blue-700", 
    icon: "📚",
    hashtags: ["#books", "#reading", "#literature", "#reviews"]
  },
  [TOPICS.DEVELOPMENT]: {
    name: "Development",
    description: "Coding, programming, and technical stuff",
    color: "bg-green-100 text-green-700",
    icon: "💻",
    hashtags: ["#coding", "#programming", "#tech", "#development"]
  },
  [TOPICS.WRITING]: {
    name: "Writing",
    description: "Writing process, tips, and creative thoughts",
    color: "bg-purple-100 text-purple-700",
    icon: "✍️",
    hashtags: ["#writing", "#creativity", "#tips", "#process"]
  },
  [TOPICS.PERSONAL]: {
    name: "Personal",
    description: "Personal thoughts, experiences, and life",
    color: "bg-yellow-100 text-yellow-700",
    icon: "🤔",
    hashtags: ["#personal", "#life", "#thoughts", "#experiences"]
  },
  [TOPICS.REVIEWS]: {
    name: "Reviews",
    description: "General reviews and recommendations",
    color: "bg-orange-100 text-orange-700",
    icon: "⭐",
    hashtags: ["#reviews", "#recommendations", "#opinions"]
  },
  [TOPICS.TOURISM]: {
    name: "Tourism & Travel",
    description: "Travel experiences, destinations, and adventures",
    color: "bg-teal-100 text-teal-700",
    icon: "✈️",
    hashtags: ["#travel", "#tourism", "#adventures", "#destinations"]
  }
} as const;

// Common hashtags for auto-suggestion
export const COMMON_HASHTAGS = [
  "#personal", "#thoughts", "#writing", "#blog", "#life", "#experiences",
  "#reviews", "#recommendations", "#tips", "#learning", "#growth",
  "#creativity", "#inspiration", "#motivation", "#reflection", "#journey"
];

// Function to auto-generate hashtags from content
export function generateHashtags(content: string, topic?: string, tags: string[] = []): string[] {
  const hashtags = new Set<string>();
  
  // Add topic-based hashtags
  if (topic && TOPIC_METADATA[topic as keyof typeof TOPIC_METADATA]) {
    TOPIC_METADATA[topic as keyof typeof TOPIC_METADATA].hashtags.forEach(tag => hashtags.add(tag));
  }
  
  // Add hashtags from tags
  tags.forEach(tag => {
    hashtags.add(`#${tag.toLowerCase()}`);
  });
  
  // Add common hashtags based on content analysis
  const contentLower = content.toLowerCase();
  
  if (contentLower.includes('review') || contentLower.includes('opinion')) {
    hashtags.add('#reviews');
  }
  
  if (contentLower.includes('tip') || contentLower.includes('advice')) {
    hashtags.add('#tips');
  }
  
  if (contentLower.includes('learn') || contentLower.includes('experience')) {
    hashtags.add('#learning');
  }
  
  if (contentLower.includes('personal') || contentLower.includes('life')) {
    hashtags.add('#personal');
  }
  
  // Limit to 8 hashtags max
  return Array.from(hashtags).slice(0, 8);
}

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
    tags: z.array(z.string()).default([]),
    hashtags: z.array(z.string()).default([]),
    topic: z.enum([TOPICS.MOVIES, TOPICS.BOOKS, TOPICS.DEVELOPMENT, TOPICS.WRITING, TOPICS.PERSONAL, TOPICS.REVIEWS, TOPICS.TOURISM]).optional(),
    author: z.string().optional(),
    featured: z.boolean().default(false),
    series: z.string().optional(),
    canonicalUrl: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
