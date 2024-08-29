import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import BlockchainForData from './components/BlockchainForData';
import UtilitySection from "./components/UtilitySection"
import Carousel from './components/Carousel';
import './App.css';
import NewsSection from './components/NewsSection';
import ResponsiveHero from './components/BottomHero';
import Footer from './components/Footer';
import FlareGallery from './components/Gallery';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <BlockchainForData />
      <br/>
      <br/>
      <Carousel />
      <UtilitySection />
      <NewsSection />
      <ResponsiveHero />
      <br/>
      <br/>
      <br/>
      <FlareGallery />
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}

export default App;
