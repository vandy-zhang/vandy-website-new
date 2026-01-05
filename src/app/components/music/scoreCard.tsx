import "@/app/globals.css";
import "./scoreCard.css";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";

export type ScoreCardProps = {
  title: string;
  imageSrc: string | StaticImport;
  fileUrl: Url;
};

export default function ScoreCard(props: ScoreCardProps) {
  const { title, imageSrc, fileUrl } = props;

  return (
    <Link href={fileUrl}>
      <div className="scoreCard flex flex-col items-center gap-y-2">
        <Image src={imageSrc} alt="Score Preview" width={310} height={256} />
        <div className="font-sriracha text-2xl text-center">{title}</div>
      </div>
    </Link>
  );
}
