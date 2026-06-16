import { FaPlay, FaPause } from "react-icons/fa";
import { RiForward10Line } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";
import './Controls.css'


type ControlsProps = {
  isPlaying: boolean;
  toggleAudio: () => void;
  skipForward: () => void;
  skipBack: () => void
};


export default function Controls({ isPlaying, toggleAudio, skipForward, skipBack }: ControlsProps) {
  return (
    <div className="control__buttons">
      <button><GrBackTen className='control__button' onClick={skipBack}/></button>

      <button className="toggle__button control__button" onClick={toggleAudio}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button ><RiForward10Line className='control__button' onClick={skipForward}/></button>
    </div>
  );
}