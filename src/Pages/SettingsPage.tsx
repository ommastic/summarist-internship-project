import Sidebar from "../components/Sidebar"
import SearchBar from "../components/Searchbar"

type SettingsPageProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SettingsPage({setIsLoginOpen}: SettingsPageProps){
  return (
    <div className='selected-for-you__page'>
          <Sidebar setIsLoginOpen={setIsLoginOpen} />
          <div className='main__content'>
            <header className='row search-with-main__content'>
            <SearchBar />
            </header>
            </div>
      




    </div>

  )
}