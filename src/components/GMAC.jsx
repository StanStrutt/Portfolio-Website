import ImageSlider from "./ImageSlider"

export default function GMAC() {
  const slides = [
    {url: 'http://localhost:3000/GMACDropDowns.png', title: "GMAC dropdown"},
    {url: 'http://localhost:3000/GMACCards.png', title: "GMAC info cards"},
  ]
    return (
        <div className='GMAC-Reimagined'>
          <h2 className="project-title">GMAC Reimagined</h2>
          <div className='flex-port'>
            <div className="slide-container">
              <ImageSlider slides={slides}/>
            </div>
            <div className="port-text">
              <p>Brief: Remake the current GMAC website as a SPA with dropdowns for the options and cards to fit the information</p>
              <p>Making this website in React helped me improve my knowledge of React logic like hooks such as useState and useEffect</p>
              <p>This website was a recreation of a current one, improving it by focusing mainly on ease of access
              with a clear and simple layout containing defined text and a clean set of links for each resource.
              I did this by remaking the website as an SPA (single page application) and using a set of dropdowns 
              and an input box to determine relevant information to the user. The relevant information would then be
              displayed as a card format with a single card for each resource
              </p>
              <a href="https://disc-ss-gmac-dev.netlify.app/">GMAC Reimagined</a>
            </div>
          </div>
        </div>
    )
}
