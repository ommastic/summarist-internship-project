import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ForYouPage from './Pages/ForYouPage';
import LibraryPage from './Pages/LibraryPage';
import InsideBookPage from './Pages/InsideBookPage';
import PlayerBookPage from './Pages/PlayerBookPage';
import { useState } from 'react';
import PlansPage from './Pages/PlansPage';
import SettingsPage from './Pages/SettingsPage';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />} />
        <Route path="/for-you" element={<ForYouPage setIsLoginOpen={setIsLoginOpen}/>} />
        <Route path='/library' element={<LibraryPage setIsLoginOpen={setIsLoginOpen}/>}/>
        <Route path="/book/:id" element={<InsideBookPage setIsLoginOpen={setIsLoginOpen} />} />
        <Route path="/player/:id" element={<PlayerBookPage setIsLoginOpen={setIsLoginOpen}/>} />
        <Route path='/choose-plan' element={<PlansPage isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen}/>}/>
        <Route path='/settings' element={<SettingsPage setIsLoginOpen={setIsLoginOpen}/> }/>
      </Routes>
    </Router>
  );
}


