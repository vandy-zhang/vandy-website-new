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
    <Link href={fileUrl} target="_blank" className="scoreCard">
      <div className="scoreCard-image">
        <Image
          src={imageSrc}
          alt="Score Preview"
          fill
          className="object-contain"
        />
      </div>
      <div className="scoreCard-title font-sriracha text-2xl">{title}</div>
    </Link>
  );
}
