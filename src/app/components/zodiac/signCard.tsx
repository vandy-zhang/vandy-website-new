import "@/app/globals.css";
import "./signCard.css";

export type SignCardProps = {
  type: string;
  sign: string;
};

export default function SignCard(props: SignCardProps) {
  const { type, sign } = props;

  return (
    <div className="signCard flex flex-col items-center justify-between p-3">
      <span className="font-stylish text-center text-2xl">{type}</span>
      <span className="font-sriracha text-center text-2xl">{sign}</span>
    </div>
  );
}
