import logo from './logo.svg';
import NavBar from './NavBar';
import Header from './Header';
import Portfolio from './Portfolio';
import { useState } from 'react';
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
    </div>
   );
}

export default App;