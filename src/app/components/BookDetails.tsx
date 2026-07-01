import type { Book } from '../types/Book';
import './BookDetails.css';

type BookDetailsProps = {
  book: Book;
  fontSize?: number;
}

export default function BookDetails({book, fontSize}: BookDetailsProps) {
  return (
    <div className='book-details'>
      <div className='book-title'>{book.title} {book.subscriptionRequired && '(Premium)'}</div>
      <div className='book-summary' style={{ fontSize: `${fontSize}px`}}>{book.summary}</div>
    </div>
  )
};