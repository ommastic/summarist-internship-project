import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { type Book } from '../../types/Book';
import './SelectedForYou.css';
import { FaCirclePlay } from "react-icons/fa6";
import { AudioDurationMins } from '../audioFiles/AudioDuration';

export default function SelectedForYou() {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected');
        setBook(response.data[0]);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, []);

  if (!book) {
    return ( //skeleton
    <div className='selected-book__wrapper'>
      <p className="selected-for-you">Selected just for you</p>
      
        <div className='book__background'>
          <div className='book__sub-title skeleton'></div>
          <div className='book--line skeleton'></div>
        </div>
        <div className='book--info'>
          <div>
           <div className='book__image skeleton'></div>
          </div>
          <div className='book__description'>
            <div className='book__title skeleton'></div>
            <div className='book__author skeleton' ></div>
            <div className='book__audio-link skeleton'><FaCirclePlay className='play--button' /></div>
          </div>
        </div>
    </div>
    );
  };
  return (
    <div className='selected-book__wrapper'>
      <p className="selected-for-you">Selected just for you</p>
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
            <div className='book__audio-link'><FaCirclePlay className='play--button' /><AudioDurationMins audioLink={book.audioLink} /></div>
          </div>
        </div>
      </Link>
    </div>
  );
}