import { getHoroscope, type HoroscopePayload } from "@/app/api/horoscope/route";
import VerticalDivider from "../common/verticalDivider";

const DEFAULT_SIGN = "leo";
const FALLBACK_DATA: HoroscopePayload = {
  luckyNumber: "-",
  luckyColor: "-",
  horoscope:
    "Unable to load today's horoscope right now. Please try again later.",
};

export default async function Horoscope({
  sign = DEFAULT_SIGN,
  date,
}: {
  sign?: string;
  date?: string;
}) {
  const display = await getHoroscope(sign.toLowerCase(), date).catch(
    () => FALLBACK_DATA,
  );

  return (
    <div className="flex w-full">
      <ul
        className="flex flex-col font-stylish text-xl gap-y-3 w-1/4 py-1 pr-6"
        style={{ color: "var(--color-highlighted)", opacity: 0.7 }}
      >
        <li>Lucky Number: {display.luckyNumber}</li>
        <li>Lucky Color: {display.luckyColor}</li>
      </ul>
      <VerticalDivider />
      <div
        className="font-stylish text-xl w-3/4 py-1 pl-6"
        style={{ color: "var(--color-body)" }}
      >
        {display.horoscope}
      </div>
    </div>
  );
}
