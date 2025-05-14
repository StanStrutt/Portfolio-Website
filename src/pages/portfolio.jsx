import GMAC from "../components/GMAC";
import FareShare from "../components/FareShare";
import DISCOTEK from "../components/DISCOTEK";
import Hackathon from "../components/Hackathon";

export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='page-title-cont'>
        <div className='page-title'>
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className='line-container'>
        <div className='line-box-again'>
          <DISCOTEK/>
          <hr/>
          <GMAC/>
          <hr/>
          <FareShare/>
          <hr/>
          <Hackathon/>
        </div>
      </div>
    </div>
  );
};
