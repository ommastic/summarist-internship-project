import { useState, useEffect } from "react";
import { type Book } from "../../types/Book";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SuggestedBooks() {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    const fetchbook = async () => {
      const response = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested');

      setBooks(response.data);
    };
    fetchbook();
  },[]);
  
  if(!books)return <p>Loading...</p>;
  console.log(books)

  return (
    <>
    <div>
      <div className="recommended__title">Suggested Books</div>
      <p className='recommended__sub-title'>Browse these books</p>
      <div className="recommended-grid">
      {books.slice(0,5).map((book) => (
        <div key={book.id} className='recommended-book__wrapper'>
          <Link to={`/book/${book.id}`} className='recommended-book'>
            <div className='recommended__book--section'>
              <div className="recommended-book__detail">
                {book.subscriptionRequired && <div className='subscription__notification'>Premium</div>}
                <img className='recommended-book__image' src={book.imageLink} />
                <div className='recommended-book__title'>{book.title}</div>
                <div className='recommended-book__author'>{book.author}</div>
                <div className='recommended-book__sub-title'>{book.subTitle}</div>
                <div>
                  <div className='recommended-book__audio-link'>{ }</div>
                  <div className='recommended-book--rating'>{ }</div>
                </div>
              </div>
            </div>
          </Link>
          </div>
      ))}
      </div>
    </div>


    </>
  );
}