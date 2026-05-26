import logo from '../assets/logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";
import { RiBallPenLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Sidebar.css';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <figure className="nav__img--mask">
        <img className="sidebar--nav__img" src={logo} alt="logo" />
      </figure>
      <div className="sidebar__links">
        <div className='sidebar-main-buttons'>
          <Link to="/" className='sidebar-button'><AiOutlineHome className='sidebar-logo'/><span>For you</span></Link >
          <Link to='/library' className='sidebar-button'><GoBookmark className='sidebar-logo'/><span>My Library</span></Link >
          <Link to='/highlights' className='sidebar-button'><RiBallPenLine className='sidebar-logo'/><span>Highlights</span></Link >
          <Link to="search" className='sidebar-button'><VscSearch className='sidebar-logo'/><span>Search</span></Link >
        </div>
        <div className='sidebar-auxilliary-buttons'>
          <Link to='/settings' className='sidebar-button'><SlSettings className='sidebar-logo'/><span>Settings</span></Link >
          <Link to="/help" className='sidebar-button'><FiHelpCircle className='sidebar-logo'/><span>Help & Support</span></Link >
          <Link to="/login" className='sidebar-button'><MdOutlineLogout className='sidebar-logo'/><span>Login</span></Link >
        </div>
      </div>
    </div>
  );
};