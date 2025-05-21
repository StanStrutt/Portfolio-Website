

export default function Home() {
  return (
    <div className='Home'>
      <div className='home-page'>
        <div className='page-title-cont'>
          <div className='page-title'>
            <h2>Home</h2>
          </div>
        </div>
        <div className='line-container'>
          <div className='line-box'>
            <div className="portrait">
              <div className="best-at">
                <p>My coding skills are the best in React, CSS and HTML, but I am always open to learning new languages and skills</p>
                <img alt="React" src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" width="140px"/>
                <img className="img-HTML" alt="HTML" src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" width="113px"/>
                <img alt="CSS" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="80px"/>
              </div>
              <div className="ok-at">
                <p>I have basic knowledge of Javascript and Python.</p>
                <img className="img-javascript" alt="Javascript" src="https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" width="130px"/>
                <img className="img-python" alt="Python" src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png" width="100px"/>
              </div>
            </div>
            <div className='welcome-box'>
              <p>I am a motivated, hardworking, and flexible individual with a passion for software engineering.</p>
              <p>I aspire to work in the industry and am currently working on a supported internship at DISC, to reach this goal.</p>
              <p>I am eager to learn and take on new challenges and can work as well on my own or as part of a team. I love problem solving and being able to expand my knowledge of my work</p>
              <p>I use VScode for all my coding work and am also familiar with github and docker</p>
              <p>I have worked with APIs and NoSQL databases like MongoDB for example</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

