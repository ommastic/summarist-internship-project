
import logo from '../../assets/logo.png';
import Login from './Login';

type HeaderProps = {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({isLoginOpen, setIsLoginOpen}: HeaderProps) {

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
