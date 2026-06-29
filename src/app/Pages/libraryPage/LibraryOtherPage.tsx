import Sidebar from "../../components/Sidebar";
import Login from "../../components/authUtil/Login";
import MainHeader from "../../components/MainHeader";
import mainLogo from '../../assets/login.png';
import type { InsideBookProps } from "../props/AllProps";
import './LibraryOtherPage.css';


export default function LibraryOtherPage(props: InsideBookProps) {

  const handleLibraryClick = () => {
    props.setRedirectPath('/library');
    props.setIsLoginOpen(true);
  };
  return (
    <div className='selected-for-you__page'>
      <Sidebar  {...props} />
      {props.isLoginOpen && <Login {...props} />}
      <div className='main__content'>
        <MainHeader {...props} />
        <div className="row">
          <div className='library-other-page__wrapper'>
            <img className='library-other-page__image' src={mainLogo} alt="libraryLogin" />
            <div className='library-other-page__info'>Log in to your account to see your library</div>
            <button className='library-other-page__login' onClick={handleLibraryClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}