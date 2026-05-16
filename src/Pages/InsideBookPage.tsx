import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


export default function InsideBookPage() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
            setBook(response.data)
        }

        fetchBook()
    }, []);

    return (
        <>
            {book && (
                <div className='recommended__book--section'>
                    <img className='recommended-book__image' src={book.imageLink} />
                    <div className='recommended-book__title'>{book.title}</div>
                    <div className='recommended-book__author'>{book.author}</div>
                    <div className='recommended-book__sub-title'>{book.subTitle}</div>
                    <div>
                        <div className='recommended-book__audio-link'>{book.averageRating }</div>
                        <div className='recommended-book--rating'>{book.type }</div>
                        <div>{book.keyIdeas}</div>
                    </div>
                    <div>
                        <button>Read</button>
                        <button>Listen</button>
                    </div>
                    <div>{book.bookDescription}</div>
                    <div>About the author</div>
                    <div>{book.authorDescription}</div>
                </div>
            )}
        </>
    )
}