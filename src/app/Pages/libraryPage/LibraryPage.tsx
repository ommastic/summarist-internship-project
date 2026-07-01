import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import type { Book } from "../../types/Book";
import { AudioDuration } from "../../components/audioFiles/AudioDuration";
import { CiClock2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import type { LibraryProps } from "../props/AllProps";
import { Link } from "react-router-dom";
import './LibraryPage.css';

export default function LibraryPage(props: LibraryProps) {
  const [libraryBooks, setLibraryBooks] = useState<Book[]>([]);
  const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;

    if (!userId) return;

    const libraryRef = collection(db, 'users', userId, 'library');

    const unsubscribe = onSnapshot(libraryRef, (snapshot) => {
      const books = snapshot.docs.map((doc) => doc.data() as Book);
      setLibraryBooks(books);
    });
    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const userId = auth.currentUser?.uid;

    if (!userId) return;

    const finishedRef = collection(db, 'users', userId, 'finished');

    const unsubscribe = onSnapshot(finishedRef, (snapshot) => {
      const books = snapshot.docs.map((doc) => doc.data() as Book);
      setFinishedBooks(books);
    });
    return () => unsubscribe();
  }, []);


  return (
    <div className='selected-for-you__page'>
      <Sidebar {...props} />
      <div className='main__content'>
        <MainHeader {...props} />

        <div className='row '>
          <div className="library__books--wrapper">
            <div className="library__section--title">Saved Books</div>
            <div className="total__books">{libraryBooks.length} items</div>
            {libraryBooks.length === 0 ? (
              <>
                <div className="zero-book__wrapper">
                  <div className="zero-book__title">Save your favorite Books!</div>
                  <div className="zero-book__subtitle">When you save a book, it will appear here.</div>
                </div>
              </>
            ) : (
              <div className="recommended-grid">
                {libraryBooks.slice(0, 5).map((book) => (
                  <div key={book.id} className='library-book__wrapper'>
                    <Link to={`/book/${book.id}`} className='recommended-book'>
                      {book.subscriptionRequired && <div className='subscription__notification'>Premium</div>}
                      <div className="recommended-book__detail">
                        <img className='recommended-book__image' src={book.imageLink} />
                        <div className='recommended-book__title'>{book.title}</div>
                        <div className='recommended-book__author'>{book.author}</div>
                        <div className='recommended-book__sub-title'>{book.subTitle}</div>
                        <div className="duration__rating">
                          <div className='recommended-book__audio-link'><CiClock2 className='clock-icon' /><AudioDuration audioLink={book.audioLink} /></div>
                          <div className='recommended-book--rating'><FaRegStar className='star-icon' />{book.averageRating}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="library__books--wrapper">
            <div className="library__section--title">Finished</div>
            <div className="total__books">{finishedBooks.length} items</div>
            {finishedBooks.length === 0 ? (
              <>
                <div className="zero-book__wrapper">
                  <div className="zero-book__title">Done and dusted!</div>
                  <div className="zero-book__subtitle">When you finish a book, you can find it here later.</div>
                </div>
              </>
            ) : (
              <div className="recommended-grid">
                {finishedBooks.slice(0, 5).map((book) => (
                  <div key={book.id} className='library-book__wrapper'>
                    <Link to={`/book/${book.id}`} className='recommended-book'>
                      {book.subscriptionRequired && <div className='subscription__notification'>Premium</div>}
                      <div className="recommended-book__detail">
                        <img className='recommended-book__image' src={book.imageLink} />
                        <div className='recommended-book__title'>{book.title}</div>
                        <div className='recommended-book__author'>{book.author}</div>
                        <div className='recommended-book__sub-title'>{book.subTitle}</div>
                        <div className="duration__rating">
                          <div className='recommended-book__audio-link'><CiClock2 className='clock-icon' /><AudioDuration audioLink={book.audioLink} /></div>
                          <div className='recommended-book--rating'><FaRegStar className='star-icon' />{book.averageRating}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}