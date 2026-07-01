
import logo from '../../assets/logo.png';
import Login from '../authUtil/Login';
import type { MainProps } from '../../Pages/props/AllProps';

export default function HomeHeader(props: MainProps) {

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo} alt="logo" />
        </figure>
        {props.isLoginOpen && <Login isLoginOpen={props.isLoginOpen} setIsLoginOpen={props.setIsLoginOpen} redirectPath={props.redirectPath}/>}
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={() => props.setIsLoginOpen(true)}>Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}
