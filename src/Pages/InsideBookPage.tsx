import Sidebar from '../components/Sidebar';
import SearchBar from '../components/Searchbar';
import './ForYouPage.css';
import InsideBookComponent from '../components/insideBookPageComponent/InsideBookComponent';


type InsideBookPageProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InsideBookPage({setIsLoginOpen}: InsideBookPageProps) {
  return(
    <div className='selected-for-you__page'>
      <div>
         <Sidebar setIsLoginOpen={setIsLoginOpen} />
      </div>
       
        <div className='main__content'>
          <header className='row search-with-main__content'>
            <SearchBar />
          </header>
            
          <main className='row for-you__wrapper'>
            <InsideBookComponent />
          </main>
        </div>
      </div>
   );
}