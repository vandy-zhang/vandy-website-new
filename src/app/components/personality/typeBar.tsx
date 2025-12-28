import "@/app/globals.css";
import "./typeBar.css";

export type TypeBarProps = {
  leftDimension: string;
  rightDimension: string;
  filledPercent: number;
  rightAligned?: boolean;
};

export default function TypeBar(props: TypeBarProps) {
  const { leftDimension, rightDimension, filledPercent, rightAligned } = props;

  return (
    <div className="typeBar-row flex items-center w-full">
      <span className="font-stylish text-2xl w-1/4">{leftDimension}</span>
      <div className="typeBar items-center w-1/2">
        <div
          className="typeBar-fill"
          style={{
            width: `${filledPercent}%`,
            left: rightAligned ? "auto" : "0",
            right: rightAligned ? "0" : "auto",
          }}
        />
      </div>
      <span className="font-stylish text-2xl text-right w-1/4">
        {rightDimension}
      </span>
    </div>
  );
}
