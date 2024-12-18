import React from 'react';

export default function Home() {
  return (
    <div className='Home'>
      <div className='home-page'>
        <div className='page-title-cont'>
          <div className='page-title'>
            <h1>Home</h1>
          </div>
        </div>
        <div className='line-container'>
          <div className='line-box'>
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
                <strong>My name is Stan and im currently an intern at DISC college</strong>
                <strong>I am working towards learning and developing my skills in javascript
                and react as well as a backend developer/software engineer.</strong>
                <strong>I have taught myself python, HTML, CSS and am currently looking for opportunities as a software developer.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

