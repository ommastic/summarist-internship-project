import Sidebar from '../components/Sidebar.tsx';
import SearchBar from '../components/Searchbar.tsx';
import BookDetails from '../components/BookDetails.tsx';
import AudioPlayer from '../components/audioFiles/AudioPlayer.tsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Book } from '../types/Book';
import axios from 'axios';


type PlayerBookPageProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayerBookPage({setIsLoginOpen}: PlayerBookPageProps) {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
      setBook(response.data);
    };

    fetchBook();
  }, [id]); 

  if (!book) {
    return <div>Loading...</div>;
  } 
  return (
   <div className='player-book--page'>
         <Sidebar setIsLoginOpen={setIsLoginOpen} />
         <div className='main__content'>
           <header className='row search-with-main__content'>
           <SearchBar />
           </header>
           
           <main className='row'>
             <BookDetails book={book}/>
           </main>
         </div>
          <div className='audio__content'>
            <AudioPlayer book={book}/>
          </div>
    </div>
  )
}