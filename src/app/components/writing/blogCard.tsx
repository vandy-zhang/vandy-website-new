import "@/app/globals.css";
import "./blogCard.css";
import { formatDate } from "@/app/utilities/common";

export type BlogCardProps = {
  title: string;
  date: Date;
};

export default function BlogCard(props: BlogCardProps) {
  const { title, date } = props;

  return (
    <div className="blogCard flex flex-col items-center justify-between">
      <span className="font-stylish text-center text-2xl">{title}</span>
      <span className="font-stylish text-center text-base">
        {formatDate(date)}
      </span>
    </div>
  );
}
