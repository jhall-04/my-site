import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <section className="mb-20">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-6">
          Hi, I'm Jordan.
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-4">
          I'm an aspiring AI engineer focused on building production-grade
          systems with LLMs, retrieval, and multi-agent architectures.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          Currently building{" "}
          <Link
            href="/portfolio"
            className="text-forest border-b border-forest/40 hover:border-forest transition-colors"
          >
            CineGraph
          </Link>
          , a multi-modal film discovery and critique engine. When I'm not
          coding, I'm probably reading research papers or watching the films I'm
          trying to get my system to understand.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-wider text-muted mb-6">
          Featured work
        </h2>
        <ul className="space-y-6">
          {projects.filter((project) => project.featured).map((project) => (
          <li
            key={project.slug}
            id={project.slug}
            className="border-t border-white/10 pt-8"
          >
            <Link
              href={`/portfolio#${project.slug}`}
              className="group block"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="text-foreground font-medium group-hover:text-forest transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted font-mono">{project.year}</span>
              </div>

              <p className="text-muted leading-relaxed mb-4">
                {project.description}
              </p>
            </Link>
          </li>
        ))}
        </ul>
        <Link
          href="/portfolio"
          className="inline-block mt-6 text-sm text-forest hover:text-foreground transition-colors"
        >
          See all projects →
        </Link>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-wider text-muted mb-6">
          Recent writing
        </h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="/blog/hello-world"
              className="group flex items-baseline justify-between gap-4"
            >
              <span className="text-foreground group-hover:text-forest transition-colors">
                Hello, world
              </span>
              <span className="text-xs text-muted font-mono shrink-0">
                Apr 2026
              </span>
            </Link>
          </li>
        </ul>
        <Link
          href="/blog"
          className="inline-block mt-6 text-sm text-forest hover:text-foreground transition-colors"
        >
          Read the blog →
        </Link>
      </section>
    </div>
  );
}