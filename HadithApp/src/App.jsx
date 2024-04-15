import { useEffect, useState } from 'react';
import love from './assets/love.svg';
import './App.css'; 
import './weak.css';

function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light'); // State for theme

  useEffect(() => {
    fetch('https://hadith-app-1.onrender.com/api/hadith')
      .then((response) => response.json())
      .then((value) => {
        setData(value);
        setTimeout(() => {
          setLoading(false); 
        }, 2000);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle theme
  };

  return (
    <div className={`container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
       <div className="icon icon-left">
    <img src={love} width={30} alt="Love Icon" />
  </div>
  <h1 className='title'>Sahi Al-Bhukhari Hadith</h1>
  <div className="icon icon-right">
    <img src={love} width={30} alt="Love Icon" />
  </div>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <div className="hadith-container">
        {loading ? (
          <p className='loader'></p> 
        ) : data.length > 0 ? (
          <div>
            <p className='hadith-content'>{data[currentIndex].content}</p>
            <p className='hadith-reference'>{data[currentIndex].reference}</p>
            <div className="navigation-buttons">
              <button onClick={handlePrevious} className='navigation-button'>Previous Hadith</button>
              <button onClick={handleNext} className='navigation-button'>Next Hadith</button>
            </div>
          </div>
        ) : (
          <p className='no-data'>No data available</p>
        )}
      </div>
    </div>
  );
}

export default App;
