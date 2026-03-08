import { NextResponse } from "next/server";

type LuckyFieldsApiResponse = {
  lucky_number?: string;
  color?: string;
};

type DescriptionApiResponse = {
  data?: {
    horoscope?: string;
    horoscope_data?: string;
  };
};

export type HoroscopePayload = {
  luckyNumber: string;
  luckyColor: string;
  horoscope: string;
};

const LUCKY_FIELDS_API_URL =
  "https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test";
const DESCRIPTION_API_URL =
  "https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily";
const DEMO_TOKEN = "mmEUtLATc8w_UNnHuR2";

function parseDateParam(date: string | undefined) {
  if (!date) {
    return "today";
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "today";
}

async function fetchLuckyFields(sign: string, date: string) {
  const response = await fetch(
    `${LUCKY_FIELDS_API_URL}?sign=${encodeURIComponent(sign)}&date=${encodeURIComponent(date)}&token=${encodeURIComponent(DEMO_TOKEN)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(`Upstream failed with status ${response.status}`);
  }

  return (await response.json()) as LuckyFieldsApiResponse;
}

async function fetchDescription(sign: string, date: string) {
  const response = await fetch(
    `${DESCRIPTION_API_URL}?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(date)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(
      `Description upstream failed with status ${response.status}`,
    );
  }

  return (await response.json()) as DescriptionApiResponse;
}

export async function getHoroscope(
  sign: string,
  date?: string,
): Promise<HoroscopePayload> {
  const normalizedDate = parseDateParam(date);
  const [luckyFields, description] = await Promise.all([
    fetchLuckyFields(sign, normalizedDate),
    fetchDescription(sign, normalizedDate),
  ]);

  return {
    luckyNumber: luckyFields.lucky_number ?? "-",
    luckyColor: luckyFields.color ?? "-",
    horoscope:
      description.data?.horoscope ??
      description.data?.horoscope_data ??
      "Unable to load today's horoscope right now.",
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sign = (searchParams.get("sign") ?? "leo").toLowerCase();
  const date = searchParams.get("date") ?? undefined;

  try {
    return NextResponse.json(await getHoroscope(sign, date));
  } catch {
    return NextResponse.json(
      {
        luckyNumber: "-",
        luckyColor: "-",
        horoscope:
          "Unable to load today's horoscope right now. Please try again later.",
      } satisfies HoroscopePayload,
      { status: 200 },
    );
  }
}
