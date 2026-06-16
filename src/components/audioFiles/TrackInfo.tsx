import type { Book } from "../../types/Book";
import './TrackInfo.css'

type TrackInfoProps = {
  book: Book;
}

export default function TrackInfo({book}: TrackInfoProps) {
  return (
    <div className="track-info__container">
      <div className="track-info__album-art">
        <img src={book.imageLink} alt={book.title}/>
      </div>
      <div className='title--author'>
        <div className="track-info__title">{book.title}</div>
      <div className="track-info__author">{book.author}</div>
      </div>
    </div>
  );
}