import SelectedForYou from '../components/forYouPageComponents/SelectedForYou';
import RecommendedBooks from '../components/forYouPageComponents/RecommendedBooks';
import SuggestedBooks from '../components/forYouPageComponents/SuggestedBooks';
import './ForYouPage.css'
// import Sidebar from '../components/Sidebar'

export default function ForYouPage() {
  return (
    <div className='selected-for-you__page'>
      {/* <Sidebar /> */}
      <main className='row for-you__wrapper'>
      <SelectedForYou />
      <RecommendedBooks />
      <SuggestedBooks />
      </main>
    </div>
  );
}
