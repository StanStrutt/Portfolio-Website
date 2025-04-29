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
          <DISCOTEK/>
          <hr/>
          <GMAC/>
          <hr/>
          <FareShare/>
        </div>
      </div>
    </div>
  );
};
