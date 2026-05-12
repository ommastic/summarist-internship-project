import Features from "../components/HomeComponents/Features";
import Footer from "../components/HomeComponents/Footer";
import Header from "../components/HomeComponents/Header";
import Landing from "../components/HomeComponents/Landing";
import Rating from "../components/HomeComponents/Rating";
import Reviews from "../components/HomeComponents/Reviews";
import './HomePage.css';



export default function HomePage() {
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <Reviews />
      <Rating />  
      <Footer />
    </>
  );
}