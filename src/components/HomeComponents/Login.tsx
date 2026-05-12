import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';



export default function Login({ setIsLoginOpen }: { setIsLoginOpen: (isOpen: boolean) => void; }) {
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (email: string, password: string) => {
    // Implement sign-up logic here, e.g., using Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  };

  const login = async () => {
    try {
      setErrorMessage('');
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/for-you');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
          setErrorMessage('Incorrect email or password');
        } else if (error.code === 'auth/user-not-found') {
          setErrorMessage('User not found');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
      }
    };
  };

  // const logout = async () => {
  //   await signOut(auth);
  // };

  const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    mode === 'login' ? (
      <section id="login">
        <div className="modal__overlay">
          <div className='modal'>
            <div className="modal__content">
              <button className='close__button' onClick={() => setIsLoginOpen(false)}>{<FontAwesomeIcon icon="times" />}</button>
              <p className='login__title'>Log in to Summarist</p>
              <button className='guest__button'>{<FontAwesomeIcon icon="user" className='user-logo' />}Login as LinkGuest</button>
              <div className="login__divider">
                <div className='login__line'></div>
                <span>or</span>
                <div className='login__line'></div>
              </div>
              <button className='google__button'><img className="google__logo" src={google} alt="Google Logo" />Login with Google</button>

              <div className="login__divider">
                <div className='login__line'></div>
                <span>or</span>
                <div className='login__line'></div>
              </div>
              {errorMessage &&
                <div className="error__message">
                  <span>{errorMessage}</span>
                  <button onClick={() => setErrorMessage('')}>Close</button>
                </div>}
              <form className="login__form" onSubmit={(event) => {
                event.preventDefault();
                login();
              }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="login__form--input"
                  value={email}
                  onChange={getEmail}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login__form--input"
                  value={password}
                  onChange={getPassword}
                />
                <button type="submit" className="btn login__form--btn" onClick={login} >
                  Login
                </button>
              </form>
            </div>
            <div className="login__footer">
              <button className="forgot__password" onClick={() => setMode('forgot-password')}>
                Forgot your Password?
              </button>
              <button className="signup__link" onClick={() => setMode('signup')}>
                Don't have an account?
              </button>
            </div>
          </div>
        </div>
      </section >
    ) : (
      mode === 'signup' ? (
        <section id="signup">
          <div className="modal__overlay">
            <div className='modal'>
              <div className="modal__content">
                <button className='close__button' onClick={() => setIsLoginOpen(false)}><FontAwesomeIcon icon="fax" /></button>
                <p className='login__title'>Sign up for Summarist</p>
                <button className='google__button'>Sign up with Google</button>
                <div className="login__divider">
                  <div className='login__line'></div>
                  <span>or</span>
                  <div className='login__line'></div>
                </div>
                <form className="login__form" onSubmit={(event) => {
                  event.preventDefault();
                  signup(email, password);
                }}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="login__form--input"
                    value={email}
                    onChange={getEmail}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="login__form--input"
                    value={password}
                    onChange={getPassword}
                  />
                  <button type="submit" className="btn login__form--btn" onClick={() => setMode('login')}>
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="login__footer">
                <button className="signup__link" onClick={() => setMode('login')} >
                  Already have an account?
                </button>
              </div>
            </div>
          </div>
        </section >
      ) : (
        mode === 'forgot-password' && (
          <section id="forgot-password">
            <div className="modal__overlay">
              <div className='modal'>
                <div className="modal__content">
                  <button className='close__button' onClick={() => setIsLoginOpen(false)}><FontAwesomeIcon icon="times" /></button>
                  <p className='login__title'>Reset Your Password</p>
                  <form className="login__form">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="login__form--input"
                    />
                    <button type="submit" className="btn login__form--btn">
                      Send Reset Link
                    </button>
                  </form>
                </div>
                <div className="login__footer">
                  <button className="signup__link" onClick={() => setMode('login')}>
                    Back to Login
                  </button>
                </div>
              </div>
            </div>
          </section >
        ))
    ));
};