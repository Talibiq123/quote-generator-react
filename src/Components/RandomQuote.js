import React, { useState } from 'react';
import './random.css';
 import Twitter from '../Assets/Twitter.png';
 import Load from '../Assets/Load.png';


const RandomQuote = () => {
  let quotes = [];

  async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johnann Wolfgang Von Goethe',
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select);
  }

  const twitter = () => {
    const text = encodeURIComponent(quote.text);
    const author = encodeURIComponent(quote.author);
    const url = `https://twitter.com/intent/tweet?text=${text}%20-%20${author}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  fetchQuote();

  return (
    <div className='container'>
        <div className='quote'>{quote.text}</div>
        <div className='line'></div>
        <div className='bottom'>
          <div className='author'>{ quote.author.split(',')[0]}</div>
          <div className='icons'>
            <img src={Load} alt='reload' onClick={() => {
              random()
            }}/>
            <img src={Twitter} alt='twitter' onClick={() => {
              twitter()
            }}/>
          </div>
        </div>
    </div>
  )
}

export default RandomQuote;
