import Sidebar from "../../components/Sidebar";
import Login from "../../components/authUtil/Login";
import MainHeader from "../../components/MainHeader";
import mainLogo from '../../assets/login.png';
import '../libraryPage/LibraryOtherPage.css';
import type { InsideBookProps } from "../props/AllProps";


export default function SettingsOtherPage(props: InsideBookProps) {

  const handleSettingsClick = () => {
    props.setRedirectPath('/settings');
    props.setIsLoginOpen(true);
  };
  return (
    <div className='selected-for-you__page'>
      <Sidebar {...props} />
      {props.isLoginOpen && <Login {...props} />}
      <div className='main__content'>
        <MainHeader {...props} />

        <div className="row">
          <div className='library-other-page__wrapper'>
            <div className='settings-other-page--title__wrapper'>
              <div className="settings-other-page__title">Settings</div>
              <div className='settings-other-page__divider'></div>
            </div>
            <img className='library-other-page__image' src={mainLogo} alt="libraryLogin" />
            <div className='library-other-page__info'>Log in to your account to see your details</div>
            <button className='library-other-page__login' onClick={handleSettingsClick}>Login</button>
          </div>
        </div>

      </div>
    </div>
  );
}