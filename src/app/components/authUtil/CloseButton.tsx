
import { LiaTimesSolid } from "react-icons/lia";
import type { CloseButtonProps } from "../../Pages/props/AllPropsTypes";


export function CloseButton(props: CloseButtonProps) {
  return (
    <button type='button' className='close__button'
      onClick={() => props.setIsLoginOpen(false)
      }>
      <LiaTimesSolid />
    </button>
  );
};