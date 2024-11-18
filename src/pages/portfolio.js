import React from 'react';
import myImage from "../images/FareSharePortfolio.png"

export default function Portfolio() {
  return (
    <div>
      <div>
        <h1>Portfolio</h1>
        <h2>Here is a collection of my previous work</h2>
      </div>
      <div className='portfolio-evidence'>
        <div className='portfolio-img-spacer'>
          <img src={myImage} alt='' width="100%"/>
        </div>
      </div>
    </div>
  );
};

