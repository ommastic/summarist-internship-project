import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ForYouPage from './Pages/ForYouPage';
import InsideBookPage from './Pages/InsideBookPage';
import PlayerBookPage from './Pages/PlayerBookPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-you" element={<ForYouPage />} />
        <Route path="/book/:id" element={<InsideBookPage />}/>
        <Route path="/player/:id" element={<PlayerBookPage />}/>
      </Routes>
    </Router>
  );
}


