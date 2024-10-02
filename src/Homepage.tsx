import GlobalStyle from './GlobalStyles';
import Hero from './components/Hero'; 
import BlockchainForData from './components/BlockchainForData';
import UtilitySection from "./components/UtilitySection"
import Carousel from './components/Carousel';
import NewsSection from './components/NewsSection';
import ResponsiveHero from './components/BottomHero';
import FlareGallery from './components/Gallery';

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="hero">
        <Hero />
      </div>
      <div id="blockchain-for-data">
        <BlockchainForData />
      </div>
      <br/>
      <br/>
      <div id="carousel">
        <Carousel />
      </div>
      <div id="utility-section">
        <UtilitySection />
      </div>
      <div id="news-section">
        <NewsSection />
      </div>
      <div id="responsive-hero">
        <ResponsiveHero />
      </div>
      <br/>
      <br/>
      <br/>
      <div id="gallery">
        <FlareGallery />
      </div>
      <br/>
  
    </>
  );
}

export default App;
