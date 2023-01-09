import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <img 
          src={ logo } 
          className='logo' 
          alt='logo' 
        />
      </header>
      <main>
        <p>adam robson</p>
        <a 
          className='link' 
          href='#' target='_blank' 
          rel='noopener noreferrer'
        >
          <img 
            src={ process.env.PUBLIC_URL + './cat.svg'} 
            alt='image of cat' 
          />
          <cite>
            <a href='#'>
            about the author
            </a>
          </cite>
        </a>
      </main>
    </div>
  );
}

export default App;
