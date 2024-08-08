import React, { useState } from 'react';
import './random.css';
import Back from '../Assets/Back.png';
import Forward from '../Assets/Forward.png';
import Twitter from '../Assets/Twitter.png';

const RandomQuote = () => {
  let quotes = [];

  async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: 'Difficulties increase the nearer we get to the goal.',
    auhtor: 'Johnann Wolfgang Von Goethe',
  });

  fetchQuote();

  return (
    <div className='container'>
        <div className='quote'>{quote.text}</div>
        <div className='line'></div>
        <div className='bottom'>
          <div className='author'>{quote.auhtor}</div>
          <div className='icons'>
            <img src={Back} alt='backward' />
            <img src={Forward} alt='forward' />
            <img src={Twitter} alt='twitter' />
          </div>
        </div>
    </div>
  )
}

export default RandomQuote;
