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
      <Footer/>
    </>
  );
}

export default App;
