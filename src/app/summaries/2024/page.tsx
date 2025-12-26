import "@/app/globals.css";
import Link from "next/link";

export default function YearOf2024() {
  return (
    <main>
      <Link
        className="font-stylish col-start-3 col-span-1 text-center text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
        href="/summaries"
      >
        ← Go back to my summaries
      </Link>
      <div
        className="font-sriracha col-start-3 col-span-1 text-4xl mt-8"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        The Year of 2024
      </div>
    </main>
  );
}
