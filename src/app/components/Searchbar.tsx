import { VscSearch } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { useEffect } from "react";
import type { Book } from "../types/Book";
import { useCallback } from "react";
import "./Searchbar.css";


type SearchBarProps = {
  search: string;
  searchResults: Book[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<Book[]>>;
};

export default function SearchBar({ search, setSearch, setSearchResults }: SearchBarProps) {

  const fetchBook = useCallback(async () => {

    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
    );

    setSearchResults(response.data);
  }, [search, setSearchResults]);


  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchBook();
    }, 300);

    return () => clearTimeout(timer);

  }, [search, fetchBook, setSearchResults]);

  const inputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const info = event.target.value;
    setSearch(info);
  };

  const cancelSearch = () => {
    setSearch('');
    setSearchResults([]);
  };

  return (
    <div className="search-container">
      <div className='search-wrapper'>
        <input className="search__input" type="text" placeholder="Search for books" value={search} onChange={inputData} />
        <div className='search__icon-wrapper'>
          {search.trim() ? (<IoCloseSharp className='search__icon' onClick={cancelSearch} />) : (<VscSearch className='search__icon' onClick={fetchBook} />)}
        </div>

      </div>
    </div>
  );
}