import SearchBar from "./Searchbar";
import type { Book } from "../types/Book";
import SearchResults from "../Pages/SearchResults";

type MainHeaderProps = {
  search: string;
  searchResults: Book[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<Book[]>>;
};

export default function MainHeader({ search, setSearch, searchResults, setSearchResults }: MainHeaderProps) {
  return (
    <header className='row search-with-main__content'>
      <div className='search__area'>
        <SearchBar search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} />


        {search.trim() && (
          <SearchResults searchResults={searchResults} setSearch={setSearch} setSearchResults={setSearchResults}/>
        )}
      </div>
    </header>

  );
}