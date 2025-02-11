import GMACDropDowns from "../images/GMACDropDowns.png"
import GMACCards from "../images/GMACCards.png"

export default function GMAC() {
    return(
        <div className='GMAC-Reimagined'>
            <h2 className="project-title">GMAC Reimagined</h2>
            <div className='project-text'>
              <p>This website was a recreation of a current one, improving it by focusing mainly on ease of access with a clear and simple layout containing defined text and a clean set of links for each resource.
                I did this by remaking the website as an SPA (single page application) and using a set of dropdowns and a input box to determine relevant information to the user.
                The relevant information would then be displayed as a card format with a single card for each resource
              </p>
              <a href="https://disc-ss-gmac-dev.netlify.app/">GMAC Reimagined</a>
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
    )
}