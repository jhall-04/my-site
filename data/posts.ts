export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello world!",
    date: "2026-04-28",
    excerpt:
      "Why am I starting this blog? A little about me and why I decided to create this space.",
  },
];