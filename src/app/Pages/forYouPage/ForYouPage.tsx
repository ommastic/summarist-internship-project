import SelectedForYou from '../../components/forYouPageComponents/SelectedForYou';
import RecommendedBooks from '../../components/forYouPageComponents/RecommendedBooks';
import SuggestedBooks from '../../components/forYouPageComponents/SuggestedBooks';
import Sidebar from '../../components/Sidebar';
import Login from '../../components/authUtil/Login';
import type { ForYouProps } from '../props/AllPropsTypes';
import './ForYouPage.css';
import MainHeader from '../../components/MainHeader';

export default function ForYouPage(props: ForYouProps) {
  return (
    <div className='selected-for-you__page'>
      <Sidebar {...props} />
      {props.isLoginOpen && <Login {...props} />}
      <div className='main__content'>

        <MainHeader {...props} />

        <main className='row for-you__wrapper'>
          <SelectedForYou />
          <RecommendedBooks />
          <SuggestedBooks />
        </main>
      </div>
    </div>
  );
}
