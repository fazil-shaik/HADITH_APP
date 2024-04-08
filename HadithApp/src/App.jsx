import { useEffect, useState } from 'react';
import love from './assets/love.svg';
import './weak.css';
import './App.css';
function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('https://hadith-app-1.onrender.com/api/hadith')
      .then((response) => response.json())
      .then((value) => setData(value))
      setLoading(false);

  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (

    <div className="container">
      <div className="top-left-icon">
        <img src={love} width={30}></img>
      </div>
      <h1 className='title'>Sahi Al-Bhukhari Hadith</h1>
      <div className="top-right-icon">
        <img src={love} width={30}></img>
      </div>
      <div className="hadith-container">
        {data.length > 0 && (
          <div>
            <p className='hadith-content'>{data[currentIndex].content}</p>
            <p className='hadith-reference'>{data[currentIndex].reference}</p>
            <div className="navigation-buttons">
              <button onClick={handlePrevious} className='navigation-button'>Previous Hadith</button>
              <button onClick={handleNext} className='navigation-button'>Next Hadith</button>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default App;
