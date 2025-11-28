import "@/app/globals.css";
import Image from "next/image";
import SignCard from "../components/zodiac/signCard";
import Snake from "@/static/pictures/snake.png";

export default function AboutMe() {
  return (
    <main>
      <div className="flex flex-col gap-y-6 items-center">
        <div
          className="font-sriracha col-start-3 col-span-1 text-center text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Zodiac Signs
        </div>
        <Image
          src={Snake}
          alt="Snake"
          width={126}
          height={126}
          className="mt-4"
        />
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex items-center gap-x-4">
            <SignCard type="Sun" sign="Leo"></SignCard>
            <SignCard type="Moon" sign="Gemini"></SignCard>
            <SignCard type="Rising" sign="Virgo"></SignCard>
          </div>
          <div className="flex items-center gap-x-4">
            <SignCard type="Venus" sign="Cancer"></SignCard>
            <SignCard type="Mercury" sign="Virgo"></SignCard>
            <SignCard type="Mars" sign="Sagittarius"></SignCard>
          </div>
        </div>
      </div>
    </main>
  );
}
