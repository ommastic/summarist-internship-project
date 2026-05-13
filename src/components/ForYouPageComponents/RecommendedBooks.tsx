import axios from "axios";
import { useState, useEffect } from "react";
import { type Book } from '../../types/Book'
import { Link } from "react-router-dom";
import './RecommendedBooks.css'


export default function RecommendedBooks() {
  const [books, setBooks] = useState<Book[] | null>(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, []);

  if (!books) {
    return <p>Loading...</p>;
  };

  return (
    <>
      <div className="recommended__title">Recommended For You</div>
      <p className='recommended__sub-title'>We think you'll like these</p>
      <div className="recommended=grid">
      {books.slice(0,5).map((book) => (
        <div key={book.id} className='recommended-book__wrapper'>
          <Link to={`/book/${book.id}`} className='book__background'>
            <div className='recommended__book--section'>
              <div>
                <img className='book__image' src={book.imageLink} />
                <div className='book__title'>{book.title}</div>
                <div className='book__author'>{book.author}</div>
                <div className='book__sub-title'>{book.subTitle}</div>
                <div>
                  <div className='book__audio-link'>{ }</div>
                  <div className='recommended__book--rating'>{ }</div>
                </div>
              </div>
            </div>
          </Link>
          </div>
      ))}
      </div>
    </>
  )
}