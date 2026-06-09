import { FaPlay, FaPause } from "react-icons/fa";
import { RiForward10Line } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";

type ControlsProps = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
};



export default function Controls({ isPlaying, setIsPlaying }: ControlsProps) {
  return (
    <div className="controls__bar">
      <button><GrBackTen /></button>

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button><RiForward10Line /></button>
    </div>
  );
}