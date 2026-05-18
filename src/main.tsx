import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faUser, faStar, faMicrophone, faBookOpen, faBookmark} from '@fortawesome/free-solid-svg-icons';

library.add(faTimes, faUser, faStar, faMicrophone, faBookOpen, faBookmark);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
