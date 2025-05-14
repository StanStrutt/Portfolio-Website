import ImageSlider from "./ImageSlider"

export default function FareShare() {
  const slides = [
    {url: '/FareSharePortfolio.png', title: "My version of FareShare"},
    {url: '/actual-FareShare.png', title: "Original FareShare"},
  ];

    return (
        <div className='FareShare'>
          <h3 className="project-title">FareShare website</h3>
          <div className="flex-port">
            <div className="slide-container">
              <ImageSlider slides={slides} className="slider-styles"/>
            </div>
            <div className="port-text">
              <p>Brief: Choose a website and try to copy it as closely as possible</p>
              <p>I decided that trying to copy a real website was the best way to start working on my react skills</p>
              <p>The original website was made in HTML and CSS with a little bit of Javascript. I remade it in React so I could improve my knowledge of the language and how similar/different
                it is compared to HTML
              </p>
              <p>The website has a functioning Navbar and 2 pages of the actual website that look exactly the same as well as arrow, that when clicked drops down information</p>
              <p>This method of building a website from the ground up to be exactly the same, I believe was a greatly beneficial process for my learning.
              This is because it gave me crucial information of how elements reacted to eachother and how to build a website from nothing, it provided
               structure to my learning as I learnt new aspects and features with every element I completed. It helped me grow by forcing me to step out
               of my comfort zone by adding elements and features I wasn't confident in implementing as I knew if I were to "improve" the website 
              and not try and make an exact copy, I may skip out on learning things that would benefit me in the future
              </p>
            </div>
          </div>
        </div>
    )
}
