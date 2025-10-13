import "@/app/globals.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link className="font-sriracha text-4xl" href="/">
        Vandy Zhang
      </Link>
      <nav className="font-stylish text-2xl">
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/summaries">Year-end Summaries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
