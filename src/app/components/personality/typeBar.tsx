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
    <div className="typeBar-row flex items-center">
      <span className="font-stylish text-2xl" style={{ width: "25%" }}>
        {leftDimension}
      </span>
      <div className="typeBar items-center">
        <div
          className="typeBar-fill"
          style={{
            width: `${filledPercent}%`,
            left: rightAligned ? "auto" : "0",
            right: rightAligned ? "0" : "auto",
          }}
        />
      </div>
      <span
        className="font-stylish text-2xl text-right"
        style={{ width: "25%" }}
      >
        {rightDimension}
      </span>
    </div>
  );
}
