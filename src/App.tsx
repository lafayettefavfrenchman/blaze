import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Homepage'; // Homepage containing the NewsSection
import BlogPost from './components/News/BlogPost'; // BlogPost component for individual posts

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Homepage with news cards */}
        <Route path="/news/:id" element={<BlogPost />} />  {/* Dynamic blog post route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
