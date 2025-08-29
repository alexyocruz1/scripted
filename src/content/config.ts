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
    icon: "🎬"
  },
  [TOPICS.BOOKS]: {
    name: "Books & Reading",
    description: "Book reviews, reading thoughts, and literature",
    color: "bg-blue-100 text-blue-700", 
    icon: "📚"
  },
  [TOPICS.DEVELOPMENT]: {
    name: "Development",
    description: "Coding, programming, and technical stuff",
    color: "bg-green-100 text-green-700",
    icon: "💻"
  },
  [TOPICS.WRITING]: {
    name: "Writing",
    description: "Writing process, tips, and creative thoughts",
    color: "bg-purple-100 text-purple-700",
    icon: "✍️"
  },
  [TOPICS.PERSONAL]: {
    name: "Personal",
    description: "Personal thoughts, experiences, and life",
    color: "bg-yellow-100 text-yellow-700",
    icon: "🤔"
  },
  [TOPICS.REVIEWS]: {
    name: "Reviews",
    description: "General reviews and recommendations",
    color: "bg-orange-100 text-orange-700",
    icon: "⭐"
  },
  [TOPICS.TOURISM]: {
    name: "Tourism & Travel",
    description: "Travel experiences, destinations, and adventures",
    color: "bg-teal-100 text-teal-700",
    icon: "✈️"
  }
} as const;

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    topic: z.enum([TOPICS.MOVIES, TOPICS.BOOKS, TOPICS.DEVELOPMENT, TOPICS.WRITING, TOPICS.PERSONAL, TOPICS.REVIEWS, TOPICS.TOURISM]).optional(),
    author: z.string().optional(),
    featured: z.boolean().default(false),
    series: z.string().optional(),
    canonicalUrl: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
