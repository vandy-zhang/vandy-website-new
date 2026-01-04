import "@/app/globals.css";
import "./scoreCard.css";
import Image, { StaticImageData } from "next/image";

export type ScoreCardProps = {
  title: string;
  preview: StaticImageData;
};

export default function ScoreCard(props: ScoreCardProps) {
  const { title, preview } = props;

  return (
    <div className="scoreCard flex flex-col items-center gap-y-2">
      <Image src={preview} alt="Score Preview" width={310} height={256} />
      <div className="font-sriracha text-2xl text-center">{title}</div>
    </div>
  );
}
