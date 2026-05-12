import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SelectedForYou.css';


type Book = {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
};

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
    return <p>Loading...</p>;
  };
  console.log(book);
  return (
    <div className='selected-book__wrapper'>
      <p className="selected-for-you">Selected for you</p>
      <Link to={`/book/${book.id}`} className='book__background'>
        <div className='subtitle__section'>
          <div className='book__sub-title'>{book.subTitle}</div>
          <div className='book--line'></div>
        </div>
        <div className='book--info'>
          <img className='book__image' src={book.imageLink} />
          <div className='book__description'>
            <p className='book__title'>{book.title}</p>
            <p className='book__author'>{book.author}</p>
            <p className='book__audio-link'>{ }</p>
          </div>

        </div>
      </Link>
    </div>
  );
}