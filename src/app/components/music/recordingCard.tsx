"use client";

import "@/app/globals.css";
import "./recordingCard.css";
import { useRef, useState, useEffect } from "react";
import { formatDuration } from "@/app/utilities/common";

export type RecordingCardProps = {
  title: string;
  duration: number; // in seconds
};

function PlayPauseIcon({ isPlaying }: { isPlaying: boolean }) {
  return isPlaying ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

export default function RecordingCard(props: RecordingCardProps) {
  const { title, duration } = props;

  const barRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0); // 0-100 in percentage
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const updateProgressFromClientX = (clientX: number) => {
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);

    setProgress(percentage * 100);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / duration;
        if (next >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const remainingTime = duration - Math.floor((progress / 100) * duration);

  return (
    <div className="recordingCard flex flex-col items-center">
      <div className="flex items-center justify-between w-full">
        <div className="font-sriracha text-2xl">{title}</div>
        <div className="font-sriracha text-xl">
          {formatDuration(remainingTime)}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="my-2 mr-2 opacity-70 cursor-pointer"
        >
          <PlayPauseIcon isPlaying={isPlaying}></PlayPauseIcon>
        </button>
        <div
          ref={barRef}
          className="progressBar w-full touch-none"
          onPointerDown={(e) => {
            updateProgressFromClientX(e.clientX);
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) {
              updateProgressFromClientX(e.clientX);
            }
          }}
          onPointerUp={(e) => {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
        >
          <div
            className="progressBar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
