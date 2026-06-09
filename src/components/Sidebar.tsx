import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";
import { RiBallPenLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { signOut, onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase.ts";
import './Sidebar.css';


type SidebarProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Sidebar({ setIsLoginOpen }: SidebarProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleAuth = async () => {
    if(auth.currentUser) {
      await signOut(auth);
    } else {
      setIsLoginOpen(true);
    }
  }
 
  return (
    <div className="sidebar">
      <figure className="nav__img--mask">
        <img className="sidebar--nav__img" src={logo} alt="logo" />
      </figure>
      <div className="sidebar__links">
        <div className='sidebar-main-buttons'>
          <Link to="/" className='sidebar-button'><AiOutlineHome className='sidebar-logo'/><span>For you</span></Link >
          <Link to='/library' className='sidebar-button'><GoBookmark className='sidebar-logo'/><span>My Library</span></Link >
          <Link to='/highlights' className='sidebar-button highlights'><RiBallPenLine className='sidebar-logo'/><span>Highlights</span></Link >
          <Link to="search" className='sidebar-button search'><VscSearch className='sidebar-logo '/><span>Search</span></Link >
        </div>
        <div className='sidebar-auxilliary-buttons'>
          <Link to='/settings' className='sidebar-button'><SlSettings className='sidebar-logo'/><span>Settings</span></Link >
          <Link to="/help" className='sidebar-button'><FiHelpCircle className='sidebar-logo'/><span>Help & Support</span></Link >
          <button onClick={handleAuth} className='sidebar-button'>
            <MdOutlineLogout className='sidebar-logo'/>
            <span className='sidebar-button-text'>{user ? 'Logout' : 'Login'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};