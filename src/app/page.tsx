import Image from "next/image";
import VandyPic from "@/static/pictures/vandy.png";
import "@/app/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home flex flex-col items-center gap-y-20">
      <div className="flex items-center gap-x-50">
        <div className="font-sriracha col-span-2 col-start-2 text-6xl opacity-70">
          <span className="block">Hello!</span>
          <span className="block" style={{ textIndent: "4ch" }}>
            I'm Vandy 🙈
          </span>
        </div>
        <Image
          src={VandyPic}
          alt="Vandy Zhang"
          width={200}
          height={240}
          className="col-start-4 rounded-[50px]"
        />
      </div>
      <Link
        className="font-stylish text-4xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
        href="/aboutme"
      >
        About Me →
      </Link>
    </main>
  );
}
