import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import { useState } from 'react';
import Resume from './pages/Resume'
import './App.css';
import Footer from './components/Footer'
import ContactMe from './pages/ContactMe';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'home' && <Header />}
      {currentPage === 'Portfolio' && <Portfolio />}
      {currentPage === 'Resume' && <Resume />}
      {currentPage === 'ContactMe' && <ContactMe />}
      
      <Footer />
    </div>
  );
}

export default App;