import VerticalDivider from "../common/verticalDivider";

/**
 * TODO: This will be an API call that retrieves horoscope for Leo each day.
 */
export default function Horoscope() {
  return (
    <div className="flex w-full">
      <ul
        className="flex flex-col font-stylish text-xl gap-y-3 w-1/4 py-1 pr-6"
        style={{ color: "var(--color-highlighted)", opacity: 0.7 }}
      >
        <li>Lucky Number: 2,3</li>
        <li>Lucky Color: Orange</li>
        <li>Lucky Food: Rice noodles</li>
        <li>Lucky Flower: Peony</li>
      </ul>
      <VerticalDivider />
      <div
        className="font-stylish text-xl w-3/4 py-1 pl-6"
        style={{ color: "var(--color-body)" }}
      >
        You'll be pulled in many directions today, Leo. It could be like you're
        in a candy shop with only a dollar and everything looks delicious. Be
        careful of starting off in too many directions at once and not following
        through on any of them. If you're stuck and unsure which way to turn,
        retreat from the situation and spend some time by yourself. You work
        best alone.
      </div>
    </div>
  );
}
