import HomePage from './Pages/homePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Book } from './types/Book';
import './App.css';
import ForYouPage from './Pages/forYouPage/ForYouPage';
import LibraryPage from './Pages/libraryPage/LibraryPage';
import LibraryOtherPage from './Pages/libraryPage/LibraryOtherPage';
import PlayerBookPage from './Pages/playerBookPage/PlayerBookPage';
import SettingsOtherPage from './Pages/settingsPage/SettingsOtherPage';
import { useState, useEffect } from 'react';
import PlansPage from './Pages/plansPage/PlansPage';
import SettingsPage from './Pages/settingsPage/SettingsPage';
import { auth } from "../firebase";
import { onAuthStateChanged, type User } from 'firebase/auth';
import Login from './components/authUtil/Login';
import InsideBookPageWrapper from './Pages/insideBookPage/InsideBookPageWrapper';


export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [redirectPath, setRedirectPath] = useState("/for-you");

  const sharedProps = {
    isLoginOpen,
    setIsLoginOpen,
    search,
    setSearch,
    searchResults,
    setSearchResults,
    redirectPath,
    setRedirectPath,
    user
  };

  const mainProps = {
    isLoginOpen,
    setIsLoginOpen,
    redirectPath
  };

  const settingsProps = {
    setIsLoginOpen,
    search,
    setSearch,
    searchResults,
    setSearchResults,
    user
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

    return () => unsubscribe();
  }, []);

  return (
    <Router basename="/summarist-internship-project">
      <Routes>
        <Route path="/" element={<HomePage {...mainProps} />} />

        <Route path="/for-you" element={<ForYouPage {...sharedProps} />} />

        <Route path='/login' element={<Login {...mainProps} />} />

        <Route path='/library' element={
          user ? (
            <LibraryPage {...sharedProps} />
          ) : (
            <LibraryOtherPage {...sharedProps} />
          )} />

        <Route path="/book/:id" element={
          <InsideBookPageWrapper {...sharedProps} />} />

        <Route path="/player/:id" element={<PlayerBookPage {...sharedProps} />} />

        <Route path='/choose-plans' element={<PlansPage {...mainProps} />} />

        <Route path='/settings' element={
          user ? (
            <SettingsPage {...settingsProps} />
          ) : (
            <SettingsOtherPage {...sharedProps} />
          )} />
      </Routes>
    </Router>
  );
}


