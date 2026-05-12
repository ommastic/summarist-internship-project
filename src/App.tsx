import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ForYouPage from './Pages/ForYouPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-you" element={<ForYouPage />} />
      </Routes>
    </Router>
  );
}


