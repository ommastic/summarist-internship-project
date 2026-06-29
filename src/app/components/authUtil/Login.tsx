import './Login.css';
import { setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { auth } from '../../../firebase';
import { useState } from 'react';
import { useSignUp } from './useSignUp';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { CloseButton } from './CloseButton';
import { FaUser } from "react-icons/fa";
import type { MainProps } from '../../Pages/props/AllProps';


export default function Login(props: MainProps) {

  type LoginMode = 'login' | 'signup' | 'forgot-password';

  const userSignUp = useSignUp(props);
  const [mode, setMode] = useState<LoginMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setErrorMessage('');
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
      props.setIsLoginOpen(false);
      navigate(props.redirectPath || "/for-you");
    } catch (error) {
      console.log(error);
      setErrorMessage('Google sign in failed. Please try again.');
    }
  };

  const login = async () => {
    try {
      setErrorMessage('');
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      props.setIsLoginOpen(false);
      navigate(props.redirectPath || "/for-you");
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

  const loginAsGuest = async () => {
    await setPersistence(auth, browserLocalPersistence);
    await signInAnonymously(auth);
    props.setIsLoginOpen(false);
    navigate(props.redirectPath || "/for-you");
  };

  const signUp = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await userSignUp(email, password);
  };

  const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await login();
  };

  return (
    <section id={mode}>
      <div className="modal__overlay">
        <div className='modal'>
          <div className="modal__content">
            <CloseButton {...props}/>

            {mode === "login" && (
              <>
                <p className='login__title'>Log in to Summarist</p>
                <button className='guest__button' onClick={loginAsGuest}>{<FaUser className='user-logo' />}Login as Guest</button>
                <div className="login__divider">
                  <div className='login__line'></div>
                  <span>or</span>
                  <div className='login__line'></div>
                </div>
                <button className='google__button' onClick={signInWithGoogle}><img className="google__logo" src={google} alt="Google Logo" />Login with Google</button>

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
                <form className="login__form" onSubmit={handleLogin}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="login__form--input"
                    value={email}
                    onChange={getEmail}
                    autoComplete='email'
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="login__form--input"
                    value={password}
                    onChange={getPassword}
                    autoComplete="current-password"
                  />
                  <button type="submit" className="btn login__form--btn">
                    Login
                  </button>
                </form>
              </>
            )}

            {mode === 'signup' && (
              <>
                <p className='login__title'>Sign up for Summarist</p>
                <button className='google__button' onClick={signInWithGoogle}><img className="google__logo" src={google} alt="Google Logo" />Sign up with Google</button>
                <div className="login__divider">
                  <div className='login__line'></div>
                  <span>or</span>
                  <div className='login__line'></div>
                </div>
                <form className="login__form" onSubmit={signUp}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="login__form--input"
                    value={email}
                    onChange={getEmail}
                    autoComplete='email'
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="login__form--input"
                    value={password}
                    onChange={getPassword}
                    autoComplete='new-password'
                  />
                  <button type="submit" className="btn login__form--btn">
                    Sign Up
                  </button>
                </form>
              </>
            )}

            {mode === 'forgot-password' && (
              <>
                <p className='login__title'>Reset Your Password</p>
                <form className="login__form">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="login__form--input"
                    value={email}
                    onChange={getEmail}
                    autoComplete='email'
                  />
                  <button type="submit" className="btn login__form--btn">
                    Send Reset Link
                  </button>
                </form>
              </>
            )}

            {errorMessage && (
              <div className='error__message'>
                <span>{errorMessage}</span>
                <button type='button' onClick={() => setErrorMessage('')}>Close</button>
              </div>
            )}
          </div>

          <div className="login__footer">
            {mode === "login" && (
              <>
                <button className='forgot__password' onClick={() => setMode('forgot-password')}>Forgot your Password</button>

                <button className="signup__link" onClick={() => setMode('signup')}>
                  Don't have an account?
                </button>

              </>
            )}

            {mode === "signup" && (
              <button type='button' className="signup__link" onClick={() => setMode('login')}>
                Already have an account?
              </button>
            )}

            {mode === "forgot-password" && (
              <button type='button' className="signup__link" onClick={() => setMode('login')}>
                Back to Login
              </button>
            )}
          </div>
        </div>
      </div>
    </section >
  );
};