import "@/app/globals.css";
import "./recordingCard.css";

export type RecordingCardProps = {
  title: string;
  duration: number;
};

export default function RecordingCard(props: RecordingCardProps) {
  const { title, duration } = props;

  return <div></div>;
}
