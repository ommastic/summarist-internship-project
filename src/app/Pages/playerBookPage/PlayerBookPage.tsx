import Sidebar from '../../components/Sidebar.tsx';
import MainHeader from '../../components/MainHeader.tsx';
import BookDetails from '../../components/BookDetails.tsx';
import './PlayerBookPage.css';
import AudioPlayer from '../../components/audioFiles/AudioPlayer.tsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import type { Book } from '../../types/Book.tsx';
import type { LibraryProps } from '../props/AllPropsTypes.ts';
import axios from 'axios';


export default function PlayerBookPage(props: LibraryProps) {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [fontSize, setFontSize] = useState(16);
  const location = useLocation();

  const hasAudioPlayer = location.pathname.startsWith('/player');

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

  const showFontsButton = () => {
    if (!hasAudioPlayer) return null;

    return (
      <div className='font-wrapper'>
        <div className={`font-14 {fontSize === 14 ? 'active' : ''`} onClick={() => setFontSize(14)}>Aa</div>
        <div className={`font-16 fontSize === 16 ? 'active' : ''`} onClick={() => setFontSize(16)}>Aa</div>
        <div className={`font-20 fontSize === 20 ? 'active' : ''`} onClick={() => setFontSize(20)}>Aa</div>
        <div className={`font-24 fontSize === 24 ? 'active' : ''`} onClick={() => setFontSize(24)}>Aa</div>
      </div>
    );
  };

  return (
    <div className='player-book--page'>
      <Sidebar {...props} showFontsButton={showFontsButton} />
      <div className='main__content'>
        <MainHeader {...props} />

        <main className='row'>
          <BookDetails book={book} fontSize={fontSize} />
        </main>
      </div>
      <AudioPlayer book={book} />
    </div>
  );
}