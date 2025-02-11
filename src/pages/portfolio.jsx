import GMAC from "../components/GMAC";
import FareShare from "../components/FareShare";
import DISCOTEK from "../components/DISCOTEK";

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
          <FareShare/>
          <hr/>
          <GMAC/>
          <hr/>
          <DISCOTEK/>
        </div>
      </div>
    </div>
  );
};

