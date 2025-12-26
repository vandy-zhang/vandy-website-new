import TypeBar from "./typeBar";

export default function MBTI() {
  return (
    <div className="flex flex-col items-center gap-y-6 pt-4 pb-8">
      <TypeBar
        leftDimension="E Extroverted"
        rightDimension="I Introverted"
        filledPercent={91}
        rightAligned
      />
      <TypeBar
        leftDimension="N Intuitive"
        rightDimension="S Observant"
        filledPercent={70}
      />
      <TypeBar
        leftDimension="T Thinking"
        rightDimension="F Feeling"
        filledPercent={65}
      />
      <TypeBar
        leftDimension="J Judging"
        rightDimension="P Prospecting"
        filledPercent={52}
        rightAligned
      />
      <TypeBar
        leftDimension="A Assertive"
        rightDimension="T Turbulent"
        filledPercent={80}
      />
    </div>
  );
}
