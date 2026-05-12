import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '..Link ssets/logo.png';
import { Link } from 'react-router-dom';
import './Sidebar.css';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <figure className="nav__img--mask">
        <img className="nav__img" src={logo} alt="logo" />
      </figure>
      <div className="sidebar__links">
        <div>
          <Link to="/">For you</Link >
          <Link to="/library">My Library</Link >
          <Link to="/highlights">Highlights</Link >
          <Link to="search">Search</Link >

        </div>
        <div>
          <Link to="/settings">Settings</Link >
          <Link to="/help">Help & Support</Link >
          <Link to="/login">Login</Link >
        </div>
      </div>
    </div>
  );
};