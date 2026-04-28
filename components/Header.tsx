import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <nav className="px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-foreground font-medium tracking-tight hover:text-forest transition-colors"
        >
          Jordan Hall
        </Link>

        <ul className="flex items-center gap-7 text-sm">
          <li>
            <Link
              href="/"
              className="text-muted hover:text-foreground transition-colors"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-muted hover:text-foreground transition-colors"
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-muted hover:text-foreground transition-colors"
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}