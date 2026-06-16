import SearchBar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

type LibraryPageProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LibraryPage({ setIsLoginOpen }: LibraryPageProps) {
  return (
    <div className='selected-for-you__page'>
      <Sidebar setIsLoginOpen={setIsLoginOpen} />
      <div className='main__content'>
        <header className='row search-with-main__content'>
          <SearchBar />
        </header>
      </div>

    </div>
  );
}