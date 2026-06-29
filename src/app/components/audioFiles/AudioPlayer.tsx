import { useRef, useState } from "react";
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "../../../firebase";
import type { Book } from "../../types/Book";
import TrackInfo from "./TrackInfo";
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import './AudioPlayer.css';

type AudioPlayerProps = {
  book: Book;
};

export default function AudioPlayer({ book }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleFinishedBook = async () => {

    const userId = auth.currentUser?.uid;
    if (!userId) return;

    await setDoc(doc(db, "users", userId, "finished", book.id), { ...book, finishedAt: serverTimestamp(), });

    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(prev => !prev);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      audioRef.current.duration
    );
  };

  const skipBack = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 10,
      0
    );
  };
  return (

    <div className="audio-player__container">
      <TrackInfo book={book} />

      <div className="player-center">
        <Controls isPlaying={isPlaying} toggleAudio={toggleAudio} skipForward={skipForward} skipBack={skipBack} />
      </div>
      <div className="progress__section">
        <audio
          ref={audioRef}
          src={book.audioLink}
          className="audio__input"
          onLoadedMetadata={() => {
            setDuration(audioRef.current?.duration || 0);
          }}
          onTimeUpdate={() => {
            setCurrentTime(audioRef.current?.currentTime || 0);
          }} 
          onEnded={handleFinishedBook}
          />
        <ProgressBar currentTime={currentTime} duration={duration} audioRef={audioRef} />
      </div>
    </div>
  );
}