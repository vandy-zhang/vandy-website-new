import "@/app/globals.css";
import "./blogCard.css";
import { formatDate } from "@/app/utilities/common";

export type BlogCardProps = {
  title: string;
  date: Date;
  language: "Chinese" | "English";
};

export default function BlogCard(props: BlogCardProps) {
  const { title, date, language } = props;

  switch (language) {
    case "Chinese":
      return (
        <div className="blogCard flex flex-col items-center justify-between">
          <span className="font-stkaiti text-center text-2xl">{title}</span>
          <span className="font-stkaiti text-center text-base">
            {formatDate(date, "zh-Hans-CN")}
          </span>
        </div>
      );
    case "English":
      return (
        <div className="blogCard flex flex-col items-center justify-between">
          <span className="font-stylish text-center text-2xl">{title}</span>
          <span className="font-stylish text-center text-base">
            {formatDate(date)}
          </span>
        </div>
      );
  }
}
