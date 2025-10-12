import Image from "next/image";
import VandyPic from "@/static/pictures/vandy.png";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-y-20">
      <div className="flex items-center gap-x-50">
        <div
          className="font-sriracha col-span-2 col-start-2 text-6xl"
          style={{ opacity: 0.7 }}
        >
          <span className="block">Hello!</span>
          <span className="invisible">Hello!</span>
          <span>I'm Vandy 🙈</span>
        </div>
        <Image
          src={VandyPic}
          alt="Vandy Zhang"
          width={200}
          height={240}
          className="col-start-4 rounded-[50px]"
        />
      </div>
      <div
        className="font-stylish col-start-3 col-span-1 text-center text-4xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        About Me →
      </div>
    </main>
  );
}
