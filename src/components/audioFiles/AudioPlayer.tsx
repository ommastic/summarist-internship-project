import { useState } from "react";
import type { Book } from "../../types/Book";
import TrackInfo from "./TrackInfo";
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import './AudioPlayer.css';

type AudioPlayerProps = {
  book: Book;
};

export default function AudioPlayer({ book }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (

    <div className="audio-player__container">
      <div className="track__info--section">
        <TrackInfo book={book} />
      </div>
      <div className="controls__bar--section">
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} /></div>
      <div className='progress__bar--section'>
        <ProgressBar />
      </div>
    </div>
  );
}