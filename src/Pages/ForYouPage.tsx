import SelectedForYou from '../components/forYouPageComponents/SelectedForYou';
import RecommendedBooks from '../components/forYouPageComponents/RecommendedBooks';
import SuggestedBooks from '../components/forYouPageComponents/SuggestedBooks';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/Searchbar';
import './ForYouPage.css';

type ForYouPageProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}   


export default function ForYouPage({setIsLoginOpen}: ForYouPageProps) {
  return (
    <div className='selected-for-you__page'>
      <Sidebar setIsLoginOpen={setIsLoginOpen} />
      <div className='main__content'>
        <header className='row search-with-main__content'>
        <SearchBar />
        </header>
        
        <main className='row for-you__wrapper'>
          <SelectedForYou />
          <RecommendedBooks />
          <SuggestedBooks />
        </main>
      </div>
    </div>
  );
}
