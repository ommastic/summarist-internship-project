import { Link } from "react-router-dom";
import type { SearchProps } from "./props/AllProps";
import '../components/Searchbar.css'


export default function SearchResults(props: SearchProps) {
  const closeSearchModal = () => {
    props.setSearch('');
    props.setSearchResults([]);
  };

  if (props.searchResults.length === 0) return null;

  return (
    <div className='search__results__modal'>
      {props.searchResults.map((book) => (
        <Link to={`/book/${book.id}`} key={book.id} className="search-book__detail" onClick={closeSearchModal}>
          <img className='search-book__image' src={book.imageLink} />
          <div>
          <div className='search-book__title'>{book.title}</div>
          <div className='search-book__author'>{book.author}</div>
          <div className='search-book__audio-link'>{ }</div>
          </div>
        </Link>
      ))}
    </div>
  );
}