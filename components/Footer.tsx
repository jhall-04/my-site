import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Jordan Hall
        </p>

        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link
              href="https://github.com/jhall-04"
              target="_blank"
              className="text-muted hover:text-foreground transition-colors"
            >
              github
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/jordan-hall04"
              target="_blank"
              className="text-muted hover:text-foreground transition-colors"
            >
              linkedin
            </Link>
          </li>
          <li>
            <Link
              href="mailto:jordanwhall04@gmail.com"
              className="text-muted hover:text-foreground transition-colors"
            >
              email
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}