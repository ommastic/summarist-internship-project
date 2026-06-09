


export default function ProgressBar() {

  return (
    <div className="progress-bar__container">
      <div className="progress-bar__filled" style={{ width: "50%" }}>
        {/* <span>{formatTime(currentTime)}</span>
        <input type="range" min={0} max={duration} value={currentTime} readOnly />
        <span>{formatTime(duration)}</span> */}
      </div>
    </div>
  );
}