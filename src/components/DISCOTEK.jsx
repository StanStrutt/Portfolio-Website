import ImageSlider from "./ImageSlider"

export default function DISCOTEK() {
    const slides = [
        {url: 'http://localhost:3000/DiscoHeader.png', title: "Discotek Header section"},
        {url: 'http://localhost:3000/DiscoFeatured.png', title: "Discotek Featured section"},
        {url: 'http://localhost:3000/DiscoList.png', title: "Discotek List section"},
    ]
    return (
        <div className="DISCOTEK">
            <h2 className="project-title">DISCOTEK Reimagined</h2>
            <div className="flex-port">
                <div className="slide-container">
                    <ImageSlider slides={slides}/>
                </div>
                <div className="port-text">
                    <p>This is another website that I was tasked with remaking exactly as it was before. I did this by building the website from the ground up in React instead of HTML.
                    I used similar CSS attributes and HTML structure but deviated slightly, improving the code where I saw fit and obviously making the code React friendly
                    by splitting up the page sections into Components. The original website was not being maintained and since has broken, The main purpose of the website is to 
                    hold and display links to relevant resources/services that are used in relation to media, I had to fix this myself by creating a mongoDB database and storing 
                    all the information required for the links there as well as API for the frontend for the information to go through. This was a bit difficult to learn but once 
                    understood quite easy to complete.
                    </p>
                    <a href="https://discotek.net/">Original DISCOtek Website</a>
                </div>
            </div>
        </div>
    )
}
