import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to blog
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-muted font-mono">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-4">
        <p>
          This is placeholder content for the post. Once we wire up the Markdown
          pipeline, the body of your `.md` files will render here.
        </p>
        <p>
          For now, you have a working route at <code>/blog/{post.slug}</code>{" "}
          and the static generation is set up — Next.js will pre-render every
          post in your <code>posts</code> array at build time.
        </p>
      </div>
    </article>
  );
}