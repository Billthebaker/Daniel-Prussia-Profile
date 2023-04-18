import logo from './logo.svg';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import { useState } from 'react';
import Resume from './pages/Resume'
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'Home' && <Header />}
      {currentPage === 'Portfolio' && <Portfolio />}
      {currentPage === 'Resume' && <Resume />}
    </div>
   );
}

export default App;