import "@/app/globals.css";
import RecordingCard from "../components/music/recordingCard";
import ScoreCard from "../components/music/scoreCard";

export default function Music() {
  return (
    <main className="content flex flex-col gap-y-12">
      <div className="flex flex-col gap-y-12 items-center">
        <div
          className="font-sriracha text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Piano Recordings
        </div>
        <div className="flex flex-col gap-y-8 items-center w-full">
          <RecordingCard
            title="Full of Love"
            mediaSrc="/recordings/FullOfLove.m4a"
          ></RecordingCard>
        </div>
      </div>
      <div className="flex flex-col gap-y-12 mb-8">
        <div
          className="font-sriracha text-4xl text-center"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          My Music Scores
        </div>
        <div className="flex flex-wrap gap-8">
          <ScoreCard
            title="Time Flows Ever Onward -- Evan Call"
            imageSrc="/scores/example_preview.png"
            fileUrl="/scores/FakeScores.pdf"
          ></ScoreCard>
        </div>
      </div>
    </main>
  );
}
