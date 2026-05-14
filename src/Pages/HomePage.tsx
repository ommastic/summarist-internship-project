import Features from "../components/homeComponents/Features";
import Footer from "../components/homeComponents/Footer";
import Header from "../components/homeComponents/Header";
import Landing from "../components/homeComponents/Landing";
import Rating from "../components/homeComponents/Rating";
import Reviews from "../components/homeComponents/Reviews";
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