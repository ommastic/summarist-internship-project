import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { type Book } from "../types/Book";
import { TbBulb } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { FaRegClock, FaRegBookmark } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";

import './InsideBookPage.css';


export default function InsideBookPage() {
    const { id } = useParams();
    const navigate = useNavigate();
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
                                    <FaRegStar className='star__logo' />
                                    <div className='inside-book__average-rating'>{book.averageRating}</div>
                                    <div>({book.totalRating} ratings)</div>
                                </div>
                                <div className='timer__information'>
                                    <FaRegClock className='clock__logo' />
                                    <div>TimerStuff</div>
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
                                    <button className='inside-book__button' onClick={() => navigate(`/player/${book.id}`)}>
                                        <div className='read__button'>
                                            <SlBookOpen className='book__logo' />
                                            Read
                                        </div>
                                    </button>
                                    <button className='inside-book__listen'><HiOutlineMicrophone className="microphone-logo" />Listen</button>
                                </div>
                            </div>
                        </div>
                        <p className='inside-book--note'><FaRegBookmark className='bookmark-logo' />Add title to My Library</p>
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