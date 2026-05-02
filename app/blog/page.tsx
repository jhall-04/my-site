import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog — your name",
  description: "Notes on what I'm building and learning.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Notes on what I'm building, what I'm learning, and the papers and
          tools I find along the way.
        </p>
      </header>

      <ul className="space-y-10">
        {sorted.map((post) => (
          <li
            key={post.slug}
            className="border-t border-white/10 pt-6"
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-xl font-medium text-foreground group-hover:text-forest transition-colors">
                  {post.title}
                </h2>
                <span className="text-xs text-muted font-mono shrink-0">
                  {formatDate(post.date)}
                </span>
              </div>
              <p className="text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}