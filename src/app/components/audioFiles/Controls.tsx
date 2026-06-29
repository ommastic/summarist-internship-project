import { IoMdPlay } from "react-icons/io";
import { RiForward10Line } from "react-icons/ri";
import { IoPauseOutline } from "react-icons/io5";
import { GrBackTen } from "react-icons/gr";
import './Controls.css'

type ControlsProps = {
  isPlaying: boolean;
  toggleAudio: () => void;
  skipForward: () => void;
  skipBack: () => void
};


export default function Controls(props: ControlsProps) {
  return (
    <div className="control__buttons">
      <button><GrBackTen className='control__button' onClick={props.skipBack}/></button>

      <button className="toggle__button control__button" onClick={props.toggleAudio}>
        {props.isPlaying ? <IoPauseOutline className="playing-button"/> : <IoMdPlay className="playing-button"/>}
      </button>

      <button ><RiForward10Line className='control__button' onClick={props.skipForward}/></button>
    </div>
  );
}