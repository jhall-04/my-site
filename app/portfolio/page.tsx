import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio — Jordan Hall",
  description: "Things I've built.",
};

export default function PortfolioPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
          Portfolio
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          A selection of things I've built. Each links to the source code or a
          live demo where available.
        </p>
      </header>

      <ul className="space-y-12">
        {projects.map((project) => (
          <li
            key={project.slug}
            id={project.slug}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium text-foreground">
                {project.title}
              </h2>
              <span className="text-xs text-muted font-mono shrink-0">
                {project.year}
              </span>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              {project.longDescription ?? project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs text-sky bg-sky/10 px-2 py-1 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex gap-5 text-sm">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="text-forest hover:text-foreground transition-colors"
                >
                  Source →
                </Link>
              )}
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="text-forest hover:text-foreground transition-colors"
                >
                  Live demo →
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}