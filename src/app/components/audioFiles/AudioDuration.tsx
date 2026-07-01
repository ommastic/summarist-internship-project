import { useState } from "react";
import { formatTime, formatTimeMins } from "../../utils/FormatTime";

type AudioDurationProps = {
  audioLink: string;
};
export function AudioDuration({ audioLink }: AudioDurationProps) {
  const [duration, setDuration] = useState(0);


  return (
    <>
      <audio src={audioLink} preload='metadata' onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)
      } />
      <span>{duration ? formatTime(duration) : "Loading..."}</span>
    </>
  );
}

export function AudioDurationMins({ audioLink }: AudioDurationProps) {
  const [duration, setDuration] = useState(0);


  return (
    <>
      <audio src={audioLink} preload='metadata' onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)
      } />
      <span>{duration ? formatTimeMins(duration) : "Loading..."}</span>
    </>
  );
}