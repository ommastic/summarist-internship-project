import Features from "../components/homeComponents/Features";
import Footer from "../components/homeComponents/Footer";
import Header from "../components/homeComponents/Header";
import Landing from "../components/homeComponents/Landing";
import Rating from "../components/homeComponents/Rating";
import Reviews from "../components/homeComponents/Reviews";
import './HomePage.css';



export default function HomePage({isLoginOpen, setIsLoginOpen}: {isLoginOpen: boolean, setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <>
      <Header isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <Landing isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <Features />
      <Reviews />
      <Rating />  
      <Footer />
    </>
  );
}