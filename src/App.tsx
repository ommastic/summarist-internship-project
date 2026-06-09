import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ForYouPage from './Pages/ForYouPage';
import InsideBookPage from './Pages/InsideBookPage';
import PlayerBookPage from './Pages/PlayerBookPage';
import { useState } from 'react';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />} />
        <Route path="/for-you" element={<ForYouPage setIsLoginOpen={setIsLoginOpen}/>} />
        <Route path="/book/:id" element={<InsideBookPage setIsLoginOpen={setIsLoginOpen} />} />
        <Route path="/player/:id" element={<PlayerBookPage setIsLoginOpen={setIsLoginOpen}/>} />
      </Routes>
    </Router>
  );
}


