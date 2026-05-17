import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { type Book } from "../types/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InsideBook.css';


export default function InsideBookPage() {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
            setBook(response.data);
        };

        fetchBook();
    }, [id]);

    return (
        <div className="row">
            {book && (
                <div className='inside-book--section'>
                    <div>
                        <div className='inside-book__title'>{book.title}</div>
                        <div className='inside-book__author'>{book.author}</div>
                        <div className='inside-book__sub-title'>{book.subTitle}</div>
                        <div className='inside-book--line'></div>
                        
                        <div className="ratings__audio">
                            <div className="ratings__player">
                                <div className="inside-book__with-average-rating">
                                    <FontAwesomeIcon icon="star" />
                                    <span className='inside-book__rating'>{book.averageRating}</span>
                                    <span>({book.totalRating} ratings)</span>
                                </div>
                                <div>TimerStuff</div>
                            </div>
                            <div className='audio__key-ideas'>
                                <div className='inside-book--rating'> <FontAwesomeIcon icon="microphone" />{book.type}</div>

                                <div className='main_key--ideas'>{book.keyIdeas} Key ideas</div>

                            </div>
                        
                        <div>
                            <div className='inside-book--line line--gap'></div>
                            <div className="read__listen--button">
                                <button className='inside-book__button'><FontAwesomeIcon className="book_color" icon='book-open' />Read</button>
                                <button className='inside-book__listen'><FontAwesomeIcon className="microphone__details" icon="microphone" />Listen</button>
                            </div>
                        </div>
                        </div>
                        <p className='inside-book--note'>Add title to My Library</p>
                        <p className='inside-book__description'>What's it about?</p>
                        <div className='inside-book__description--details'>
                            {book.tags.map(tag => <div className='inside-book-tags'>{tag}</div>)}
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