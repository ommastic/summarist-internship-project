import Features from "../../components/homeComponents/Features";
import Footer from "../../components/homeComponents/Footer";
import HomeHeader from "../../components/homeComponents/HomeHeader";
import Landing from "../../components/homeComponents/Landing";
import Rating from "../../components/homeComponents/Rating";
import Reviews from "../../components/homeComponents/Reviews";
import type { MainProps } from "../props/AllPropsTypes";
import './HomePage.css';


export default function HomePage(props: MainProps) {
  return (
    <>
      <HomeHeader {...props} />
      <Landing {...props} />
      <Features />
      <Reviews {...props} />
      <Rating />
      <Footer />
    </>
  );
}