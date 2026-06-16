import type { RefObject } from "react";
import formatTime from "../../utils/FormatTime";
import './ProgressBar.css'

type ProgressBarProps = {
  currentTime: number;
  duration: number;
  audioRef: RefObject<HTMLAudioElement | null>;
};

export default function ProgressBar({ currentTime, duration, audioRef}: ProgressBarProps) {

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(event.target.value);

    if (audioRef.current){
      audioRef.current.currentTime = newTime
    }
  }

  return (
    <div className="progress-bar__container">
      <div className="progress-bar__filled">
        <span>{formatTime(currentTime)}</span>
        <input type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}