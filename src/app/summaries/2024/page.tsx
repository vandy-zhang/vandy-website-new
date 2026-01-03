import "@/app/globals.css";
import Link from "next/link";

export default function YearOf2024() {
  return (
    <main className="content max-w-[1000px]">
      <Link
        className="font-stylish text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
        href="/summaries"
      >
        ← Go back to my summaries
      </Link>
      <div
        className="font-sriracha text-4xl mt-8"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        The Year of 2024
      </div>
      <span className="block mt-8 mb-8 font-stylish text-lg">
        Started my first full-time job. <br />
        Stepped into a completely new kind of work. <br />
        Met many interesting people who are not around my age, and somehow
        became the one responsible for stirring things up.
        <br />
        <br />
        Traveled twice. Old places didn’t bring many new surprises.
        <br />
        Got to know some new people, but lost an old friend.
        <br />
        <br />
        Heard too many complaints from people around about their lives and this
        city. <br />
        Saw too many choices they made in pursuit of a “better” life. <br />
        But if I am living at the foot of snowy mountains, seeing green trees
        and lakes every day, and still complaining and feeling anxious all the
        time, I will never be satisfied.
        <br />
      </span>
      <div
        className="font-stylish text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        Firsts
      </div>
      <span className="block mt-4 mb-8 font-stylish text-lg">
        My first time signing up for an extracurricular class for myself.
        <br />
        My first gym membership.
        <br />
        My first long road trip.
        <br />
        My first time buying sports equipment.
        <br />
        My first time furnishing a space exactly the way I liked.
        <br />
        My first step into the stock market.
        <br />
        My first time seeing a doctor in the U.S by myself.
        <br />
        My first time dealing with information fraud.
        <br />
        ...and many, many first times of trying something new, hearing new
        pieces of music, or getting to know someone.
      </span>
      <div
        className="font-stylish text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        Favorites
      </div>
      <span className="block mt-4 mb-8 font-stylish text-lg">
        <b>Favorite music:</b> <i>Adieu (Farewell Love Scene)</i> — City of
        Prague Philharmonic Orchestra
        <br />
        <b>Favorite series:</b> <i>Tian Xing Jian Heroes</i>
        <br />
        <b>Favorite movie:</b> <i>Wicked</i>
        <br />
        <b>Favorite TV show:</b> <i>Culinary Class Wars</i>
        <br />
        <b>Favorite actor:</b> Song Jia
        <br />
        <b>Favorite singer:</b> Higuchi Ai
        <br />
        <b>Favorite composer:</b> Tony Ann
        <br />
        <b>Favorite figure skating program:</b> Chaeyeon Kim,{" "}
        <i>Adagio For Tron</i>
        <br />
      </span>
      <div
        className="font-stylish text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        Mosts
      </div>
      <span className="block mt-4 mb-8 font-stylish text-lg">
        <b>Changed me the most:</b> managing my own life.
        <br />
        <b>The problem that bothered me the most:</b> my rules for friendship.
        <br />
        <b>The sentence I liked the most:</b>{" "}
        <i>God spared my life for a reason.</i>
        <br />
        <b>The most unsettling subconscious habit:</b> sorting people into
        categories and filing them away in my memory.
        <br />
        <b>The question I thought about the most:</b> what am I actually working
        for?
        <br />
      </span>
      <div
        className="font-stylish text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        2024
      </div>
      <span className="block mt-4 mb-8 font-stylish text-lg">
        2024 was still a year of speaking differently to different people —
        usually saying very little, and when I did speak, saying something that
        landed too hard. I moved through relationships without showing much
        personality, while at the same time being extremely exclusive in my
        pursuit of a complete and intact self.
        <br />
        <br />
        It was also a year of turning losses into gains, and of living the kind
        of life my abilities could support. In my free time, I tried to ask
        myself what I actually wanted, went out to walk and explore, tried new
        areas, and picked up hobbies I had left unfinished when I was younger.
      </span>
      <div
        className="font-stylish text-2xl"
        style={{ color: "var(--color-header)", opacity: 0.7 }}
      >
        2025
      </div>
      <span className="block mt-4 mb-8 font-stylish text-lg">
        <b>Goals for the new year:</b> stay healthy, stay happy, and keep loving
        life.
        <br />
        <b>Wishes for the new year:</b> I hope the things I love can slowly
        begin, and the things I’ve begun can continue. I hope I can be more
        myself, and express myself more naturally, more often.
      </span>
    </main>
  );
}
