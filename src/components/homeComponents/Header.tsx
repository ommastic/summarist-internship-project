
import logo from '../../assets/logo.png';
import {  useState } from 'react';
import Login from './Login';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo} alt="logo" />
        </figure>
        {isLoginOpen && <Login  setIsLoginOpen={setIsLoginOpen} />}
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={() => setIsLoginOpen(true)}>Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}
