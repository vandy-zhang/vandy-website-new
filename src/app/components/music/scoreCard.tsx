import "@/app/globals.css";
import "./scoreCard.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ScoreCardProps = {
  title: string;
  imageSrc: string | StaticImport;
};

export default function ScoreCard(props: ScoreCardProps) {
  const { title, imageSrc } = props;

  return (
    <div className="scoreCard flex flex-col items-center gap-y-2">
      <Image src={imageSrc} alt="Score Preview" width={310} height={256} />
      <div className="font-sriracha text-2xl text-center">{title}</div>
    </div>
  );
}
