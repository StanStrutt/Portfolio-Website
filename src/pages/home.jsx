import React from 'react';

export default function Home() {
  return (
    <div className='Home'>
      <div className='home-page'>
        <div className='page-title-cont'>
          <h1 className='page-title'>Home</h1>
        </div>        
        <div className='line-container'>
          <div className='line-box'>
            {/* <h2>Welcome to my Portfolio website</h2>
            <h3>A little bit about myself</h3>
            <p>My name is Stan and im currently an intern at DISC college 
              </p>
            <p>I am working towards learning and developing my skills in javascript
              and react as well as a backend developer/software engineer.
            </p>
            <p>I have taught myself python, HTML, CSS and am currently looking for opportunities as a software developer.</p> */}
            <div className='welcome-box'>
              <h2>Welcome</h2>
            </div>
            <div className='port-box'>
              <h2>To my Portfolio</h2>
            </div>
            <div className='long-box'>
              <div className='long-title'>
                <h3>A little bit about myself</h3>
              </div>
              <div className='long-text'>
                <p>My name is Stan and im currently an intern at DISC college</p>
                <p>I am working towards learning and developing my skills in javascript
                and react as well as a backend developer/software engineer.</p>
                <p>I have taught myself python, HTML, CSS and am currently looking for opportunities as a software developer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

