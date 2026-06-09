import type { Book } from '../types/Book';
import './BookDetails.css';

type BookDetailsProps = {
  book: Book;
}

export default function BookDetails({book}: BookDetailsProps) {
  return (
    <div className='book-details'>
      <div className='book-title'>{book.title}</div>
      <div className='book-summary'>{book.summary}</div>
    </div>
  )
}