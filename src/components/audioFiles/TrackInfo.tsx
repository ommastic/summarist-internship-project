import type { Book } from "../../types/Book";

type TrackInfoProps = {
  book: Book;
}

export default function TrackInfo({book}: TrackInfoProps) {
  return (
    <div className="track-info__container">
      <div className="track-info__album-art">
        <img className='image' src={book.imageLink} alt={book.title}/>
      </div>
      <div>
        <div className="track-info__title">{book.title}</div>
      <div className="track-info__author">{book.author}</div>
      </div>
    </div>
  );
}