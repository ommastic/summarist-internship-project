import axios from "axios";
import { useState, useEffect } from "react";
import {type Book} from '../../types/Book'
import { Link } from "react-router-dom";


export default function RecommendedBooks(){
  const [books, setBooks] = useState<Book[] | null>(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
        setBooks(response.data[0]);
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
    books.map((book) => {
      <div className='recommended-book__wrapper'>
      <div className="recommended__title">Recommended For You</div>
      <p className='recommended__sub-title'>We think you'll like these</p>
      <Link to={`/book/${book.id}`} className='book__background'>
        <div className='subtitle__section'>
          <div className='book__sub-title'>{book.subTitle}</div>
          <div className='book--line'></div>
        </div>
        <div className='book--info'>
          <div>
            <img className='book__image' src={book.imageLink} />
          </div>
          <div className='book__description'>
            <div className='book__title'>{book.title}</div>
            <div className='book__author'>{book.author}</div>
            <div className='book__audio-link'>{ }</div>
          </div>
        </div>
      </Link>
    </div>
    })
  )
}