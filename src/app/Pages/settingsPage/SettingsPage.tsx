
import Sidebar from "../../components/Sidebar";
import MainHeader from "../../components/MainHeader";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import type { SettingsProp } from "../props/AllProps";
import { getPremiumStatus } from "../account/getPremiumStatus";
import './SettingsPage.css';
import { useState, useEffect } from "react";


export default function SettingsPage(props: SettingsProp) {
  const navigate = useNavigate();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const loadPremiumStatus = async () => {
      const premium = await getPremiumStatus();
      setIsPremium(premium);
    };

    loadPremiumStatus();
  }, []);

  const handleSettings = () => {
    if (auth.currentUser?.isAnonymous) {
      alert("Please logout as a guest user and create an account to subscribe.");
      return;
    }
    else {
      navigate("/choose-plans");
    };
  };

  return (
    <div className='selected-for-you__page'>
      <Sidebar {...props} />
      <div className='main__content'>
        <MainHeader {...props} />
        <div className="row ">
          <div className='settings__wrapper'></div>
          <div className="settings__main--page">Settings</div>
          <div className="settings__divider"></div>
          <div className='settings__sub-topic'>Your Subscription plan</div>

          { isPremium ? (
            <div className='settings__info'>Premium</div>
          ) : (
            <>
              <div className='settings__info'>Basic</div>
              <button className='upgrade__button' onClick={handleSettings}>Upgrade to Premium</button>
            </>
            )
          }

          <div className="settings__divider"></div>
          <div className='settings__sub-topic'>Email</div>
          <div className='settings__info'>{props.user?.email || "Guest User"}</div>
        </div>
      </div>
    </div>
  );
}