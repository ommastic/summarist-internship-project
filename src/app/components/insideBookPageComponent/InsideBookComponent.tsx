import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { type Book } from "../../types/Book";
import { TbBulb } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { AudioDuration } from "../audioFiles/AudioDuration";
import { HiOutlineMicrophone } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";
import { doc, setDoc, deleteDoc, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import Login from "../authUtil/Login";
import { getPremiumStatus } from "../../Pages/account/getPremiumStatus";
import type { InsideBookPageProps } from "../../Pages/props/AllProps";
import './InsideBookComponent.css';


export default function InsideBookPage(props: InsideBookPageProps) {
    const navigate = useNavigate();
    const [libraryBooks, setLibraryBooks] = useState<Book[]>([]);

    const book = props.book;

    const bookAlreadySaved = props.book && libraryBooks.some((savedBook) => savedBook.id === props.book.id);
    const userId = auth.currentUser?.uid;

    useEffect(() => {
        if (!userId) return;

        const libraryRef = collection(db, "users", userId, "library");

        const unsubscribe = onSnapshot(libraryRef, (snapshot) => {
            const books = snapshot.docs.map((doc) => doc.data() as Book);
            setLibraryBooks(books);
        });
        return () => unsubscribe();
    }, [userId]);

    const addToLibrary = async () => {

        if (!userId) {
            props.setIsLoginOpen(true);
            return;
        }

        if (!props.book) return;
        const bookRef = doc(db, "users", userId, "library", props.book.id);

        if (bookAlreadySaved) {
            await deleteDoc(bookRef);
        } else {
            await setDoc(bookRef, props.book);
        }
    };

    const handleReadOrListen = async () => {
        if (!book) return;

        if (!userId) {
            props.setIsLoginOpen(true);
            return;
        }

        const isPremiumUser = await getPremiumStatus();

        if (book.subscriptionRequired && !isPremiumUser) {
            navigate('/choose-plans');
            return;
        }
        navigate(`/player/${book.id}`);
    };

    return (
        <div className="row">
            {props.isLoginOpen && <Login {...props} />}

            {book && (
                <div className='inside-book--section'>
                    <div>
                        <div className='inside-book__title'>{book.title} {book.subscriptionRequired && "( Premium )"}</div>
                        <div className='inside-book__author'>{book.author}</div>
                        <div className='inside-book__sub-title'>{book.subTitle}</div>
                        <div className='inside-book--line'></div>

                        <div className="ratings__audio">
                            <div className="ratings__player">
                                <div className="inside-book__with-average-rating">
                                    <FaRegStar className='star__logo' />
                                    <div className='inside-book__average-rating'>{book.averageRating}</div>
                                    <div>({book.totalRating} ratings)</div>
                                </div>
                                <div className='timer__information'>
                                    <FaRegClock className='clock__logo' />
                                    <div><AudioDuration audioLink={book.audioLink} /></div>
                                </div>
                            </div>
                            <div className='audio__key-ideas'>
                                <div className='microphone__text'>
                                    <HiOutlineMicrophone className="microphone__logo" />
                                    <div className='inside-book--rating'> {book.type}</div>
                                </div>

                                <div className='main_key--ideas'>
                                    <div className='bulb__key-ideas'>
                                        <TbBulb className='light__logo' />
                                        <div>{book.keyIdeas} Key ideas</div>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <div className='inside-book--line line--gap'></div>
                                <div className="read__listen--button">
                                    <button className='inside-book__button' onClick={handleReadOrListen}>
                                        <div className='read__button'>
                                            <SlBookOpen className='book__logo' />
                                            Read
                                        </div>
                                    </button>
                                    <button className='inside-book__listen' onClick={handleReadOrListen}>
                                        <div className='listen__button'>
                                            <HiOutlineMicrophone className="microphone-logo" />Listen
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className='inside-book--note' onClick={addToLibrary}>
                            {bookAlreadySaved ?
                                (<>
                                    <FaBookmark className='bookmark-logo' />Saved in My Library
                                </>) :
                                (<>
                                    <FaRegBookmark className='bookmark-logo' />Add title to My Library
                                </>)}
                        </button>
                        <p className='inside-book__description'>What's it about?</p>
                        <div className='inside-book__description--details'>
                            {book.tags.map((tag, index) => (<div key={index} className='inside-book-tags'>{tag}</div>))}
                        </div>
                        <div className="inside-book__details">{book.bookDescription}</div>
                        <div className='inside-book__author-info'>About the author</div>
                        <div className="inside-book__details">{book.authorDescription}</div>
                    </div>
                    <div>
                        <img className='inside-book__image' src={book.imageLink} />
                    </div>
                </div>
            )}
        </div>
    );
}