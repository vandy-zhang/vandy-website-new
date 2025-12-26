import "@/app/globals.css";
import Image from "next/image";
import SignCard from "../components/zodiac/signCard";
import Snake from "@/static/pictures/snake.png";

export default function AboutMe() {
  return (
    <main>
      <div className="flex flex-col gap-y-12 items-center">
        <div
          className="font-sriracha col-start-3 col-span-1 text-center text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Zodiac Signs
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={Snake}
            alt="Snake"
            width={126}
            height={126}
            className="m-2"
          />
          <div className="flex flex-col items-center gap-y-6 p-4">
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
        <div className="flex flex-col gap-y-4">
          <div
            className="font-stylish text-2xl"
            style={{ color: "var(--color-header)", opacity: 0.7 }}
          >
            What are people like with this combination?
          </div>
          <div
            className="font-stylish text-xl"
            style={{ color: "var(--color-body)", opacity: 0.7 }}
          >
            They are a human power bank of life — everything they take care of
            ends up thriving. They come across as warm, composed, and
            intelligent (Leo + Virgo rising), but underneath there is a curious,
            adventurous, and slightly restless mind (Gemini Moon + Mars in
            Sagittarius). People see them as reliable and thoughtful, but once
            you know them, you realize they are playful, witty, and surprisingly
            bold.
          </div>
          <div
            className="font-stylish text-2xl"
            style={{ color: "var(--color-header)", opacity: 0.7 }}
          >
            Today’s Horoscope: September 21, 2025
          </div>
          <div
            className="font-stylish text-xl"
            style={{ color: "var(--color-body)", opacity: 0.7 }}
          >
            You'll be pulled in many directions today, Leo. It could be like
            you're in a candy shop with only a dollar and everything looks
            delicious. Be careful of starting off in too many directions at once
            and not following through on any of them. If you're stuck and unsure
            which way to turn, retreat from the situation and spend some time by
            yourself. You work best alone.
          </div>
        </div>
        <div
          className="font-sriracha col-start-3 col-span-1 text-center text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Personality Tests
        </div>
        <div className="flex flex-col gap-y-4">
          <div
            className="font-stylish text-xl"
            style={{ color: "var(--color-body)", opacity: 0.7 }}
          >
            I’m INXX-A. I get different results every time I take a personality
            test, but the three dimensions that never change are introverted,
            intuitive, and assertive. When I’m relaxed, I think I’m more towards
            INTP-A.
          </div>
          <div
            className="font-stylish text-2xl"
            style={{ color: "var(--color-header)", opacity: 0.7 }}
          >
            What is INTP-A like?
          </div>
          <div
            className="font-stylish text-xl"
            style={{ color: "var(--color-body)", opacity: 0.7 }}
          >
            They look detached, but their mind is a buzzing workshop of theories
            and connections. <br />
            They are chill and entertaining because they are unfiltered, quirky,
            and surprisingly insightful. <br />
            They are confident enough to not spiral over mistakes. <br />
            They may need to stay grounded in reality. <br />
            They should balance big-picture theorizing with practical execution.
          </div>
          <div
            className="font-stylish text-2xl"
            style={{ color: "var(--color-header)", opacity: 0.7 }}
          >
            But
          </div>
          <div
            className="font-stylish text-xl"
            style={{ color: "var(--color-body)", opacity: 0.7 }}
          >
            This is just for fun. Humans are hard to read. I’m still too far
            away from knowing myself.
          </div>
        </div>
      </div>
    </main>
  );
}
