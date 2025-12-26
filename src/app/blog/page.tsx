import "@/app/globals.css";
import BlogCard from "../components/writing/blogCard";

export default function Blog() {
  return (
    <main>
      <div className="flex flex-col gap-y-12 items-center">
        <div
          className="font-sriracha col-start-3 col-span-1 text-center text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Writings
        </div>
        <BlogCard title="Growing Up" date={new Date(2023, 11, 18)}></BlogCard>
      </div>
    </main>
  );
}
