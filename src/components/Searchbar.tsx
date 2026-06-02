import { VscSearch } from "react-icons/vsc";
import "./Searchbar.css";


export default function SearchBar() {
  return (
      <div className='search-wrapper'>
        <input className="search__input" type="text" placeholder="Search for books" />
        <div className='search__icon-wrapper'>
          <VscSearch className='search__icon' />
        </div>
      </div>
  );
}