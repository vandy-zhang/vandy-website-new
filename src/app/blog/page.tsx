import "@/app/globals.css";
import BlogCard from "../components/writing/blogCard";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="content flex flex-col gap-y-12 items-center">
      <div
        className="font-sriracha text-4xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        My Writings
      </div>
      <Link className="w-full" href="/blog/growingup">
        <BlogCard
          title="长大"
          date={new Date(2023, 11, 18)}
          language="Chinese"
        ></BlogCard>
      </Link>
    </main>
  );
}
