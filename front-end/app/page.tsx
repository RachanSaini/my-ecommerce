import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import FeaturedBrands from "./components/FeaturedBrands";
import ShopsPage from "./shops/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedBrands/>
      <Footer/>
    </div>
  );
}
