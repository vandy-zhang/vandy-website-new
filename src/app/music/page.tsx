import "@/app/globals.css";
import RecordingCard from "../components/music/recordingCard";
import ExamplePreview from "@/static/scores/example_preview.png";
import ScoreCard from "../components/music/scoreCard";

export default function Music() {
  return (
    <main className="content">
      <div className="flex flex-col gap-y-12 items-center mb-8">
        <div
          className="font-sriracha text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Piano Recordings
        </div>
        <RecordingCard title="Full of Love" duration={211}></RecordingCard>
        <RecordingCard title="Wild Side" duration={187}></RecordingCard>
        <RecordingCard
          title="Danza in Re Minore"
          duration={176}
        ></RecordingCard>
      </div>
      <div className="flex flex-col gap-y-12 my-8">
        <div
          className="font-sriracha text-4xl text-center"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Music Scores
        </div>
        <div className="flex flex-wrap gap-8">
          <ScoreCard
            title="Time Flows Ever Onward -- Evan Call"
            preview={ExamplePreview}
          ></ScoreCard>
          <ScoreCard
            title="Time Flows Ever Onward -- Evan Call"
            preview={ExamplePreview}
          ></ScoreCard>
          <ScoreCard
            title="Time Flows Ever Onward -- Evan Call"
            preview={ExamplePreview}
          ></ScoreCard>
        </div>
      </div>
    </main>
  );
}
