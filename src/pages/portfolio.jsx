import React from 'react';
import ActualFareShare from "../images/actual-FareShare.png"
import FareShareImage from "../images/FareSharePortfolio.png"
import GMACDropDowns from "../images/GMACDropDowns.png"
import GMACCards from "../images/GMACCards.png"


export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='page-title-cont'>
        <div className='page-title'>
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className='line-container'>
        <div className='line-box-again'>
          <div className='port-text'>
            <h2>Here is a collection of my previous work</h2>
          </div>
          <div className='FareShare'>
            <h2>FareShare webiste</h2>
            <div className='FareShare-text'>
              <p>This is a copy of the FareShare website that I made</p>
              <p>I decided that trying to copy a a real website was the best way to start working on my react skills </p>
              <a href=" ">FareShare placeholder link</a>
            </div>
            <div className="img-holder">
              <img src={FareShareImage} width="90%" alt=''/>
            </div>
            <div className='FareShare-text'>
              <p>Here is the original</p>
            </div>
            <div className="img-holder">
              <img src={ActualFareShare} width="90%" alt=''/>
            </div>
            <div className='FareShare-text'>
              <p>This method of copying a real website and building it from the ground up to be exactly the same, I believe was a greatly beneficial process for my learning.
                This is because it gave me crucial information of how elements reacted to eachother and how to build a website from nothing, it provided structure to my learning
                as I learnt new aspects and features with every element I completed. It helped me grow by forcing me to step out of my comfort zone by adding elements and features
                I wasn't confident in implementing as I knew if I were to "improve" the website and not try and make an exact copy, I may skip out on learning things that would benefit me in the future
              </p>
            </div>
          </div>
          <hr/>
          <div className='GMAC-Reimagined'>
            <div className='GMAC-text'>
              <p>This website was a recreation of a current one, improving it by focusing mainly on ease of access with a clear and simple layout containing defined text and a clean set of links for each resource.
                I did this by remaking the website as an SPA (single page application) and using a set of dropdowns and a input box to determine relevant information to the user.
                The relevant information would then be displayed as a card format with a single card for each resource
              </p>
              <a href=" ">GMAC Reimagined placeholder link</a>
            </div>
            <div className='img-holder'>
              <div>
                <img src={GMACDropDowns} width="90%" alt=''/>
              </div>
              <div>
                <img src={GMACCards} width="90%" alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

