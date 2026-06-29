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


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} redirectPath={redirectPath} />} />

        <Route path="/for-you" element={<ForYouPage isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} search={search} searchResults={searchResults} setSearch={setSearch} setSearchResults={setSearchResults} redirectPath={redirectPath} />} />

        <Route path='/login' element={<Login setIsLoginOpen={setIsLoginOpen} redirectPath={redirectPath} isLoginOpen={isLoginOpen}/>} />

        <Route path='/library' element={
          user ? (
            <LibraryPage setIsLoginOpen={setIsLoginOpen} search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} />
          ) : (
            <LibraryOtherPage isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} redirectPath={redirectPath} setRedirectPath={setRedirectPath} />
          )} />

        <Route path="/book/:id" element={
          <InsideBookPageWrapper isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} redirectPath={redirectPath} setRedirectPath={setRedirectPath} />} />

        <Route path="/player/:id" element={<PlayerBookPage setIsLoginOpen={setIsLoginOpen} search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} />} />

        <Route path='/choose-plans' element={<PlansPage isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} redirectPath={redirectPath} />} />

        <Route path='/settings' element={
          user ? (
            <SettingsPage setIsLoginOpen={setIsLoginOpen} search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults}
              user={user} />
          ) : (
            <SettingsOtherPage isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} setRedirectPath={setRedirectPath} redirectPath={redirectPath} />
          )} />

        <Route path='/search-result' />


      </Routes>
    </Router>
  );
}


