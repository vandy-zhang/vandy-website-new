import "@/app/globals.css";
import Link from "next/link";

export default function Summaries() {
  return (
    <main className="content">
      <ul className="space-y-6">
        <li>
          <Link
            className="font-stylish col-start-3 col-span-1 text-center text-4xl"
            style={{ color: "var(--color-header)", opacity: 0.7 }}
            href="/summaries/2025"
          >
            Review My 2025 →
          </Link>
        </li>
        <li>
          <Link
            className="font-stylish col-start-3 col-span-1 text-center text-4xl"
            style={{ color: "var(--color-header)", opacity: 0.7 }}
            href="/summaries/2024"
          >
            Review My 2024 →
          </Link>
        </li>
      </ul>
    </main>
  );
}
