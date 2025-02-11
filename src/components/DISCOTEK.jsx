import DiscoHeader from "../images/DiscoHeader.png"
import DiscoFeatured from "../images/DiscoFeatured.png"
import DiscoList from "../images/DiscoList.png"

export default function DISCOTEK() {
    return(
        <div className="DISCOTEK">
            <h2 className="project-title">DISCOTEK Reimagined</h2>
            <div className="img-holder">
                <img alt=""src={DiscoHeader} width="90%"/>
                <img alt=""src={DiscoFeatured} width="90%"/>
                <img alt=""src={DiscoList} width="90%"/>
            </div>
            <div className="project-text">
                <div className="Disco-link">
                    <a href="https://discotek.net/">Original DISCOtek Website</a>
                </div>
                <p>This is another website that I was tasked with remaking exactly as it was before. I did this by building the website from the ground up in React instead of HTML.
                    I used similar CSS attributes and HTML structure but deviated slightly, improving the code where I saw fit and obviously making the code React friendly
                    by splitting up the page sections into Components. The original website was not being maintained and since has broken, The main purpose of the website is to 
                    hold and display links to relevant resources/services that are used in relation to media, I had to fix this myself by creating a mongoDB database and storing 
                    all the information required for the links there as well as API for the frontend for the information to go through. This was a bit difficult to learn but once 
                    understood quite easy to complete.
                </p>
            </div>
        </div>
    )
}