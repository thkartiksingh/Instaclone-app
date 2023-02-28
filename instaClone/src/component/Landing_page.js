import { Link } from "react-router-dom"
import image from "../Images/img.png"
import "../styles/landing_page.css"

function LandPage(){
    return <div className="landing_page">
        <img className="image_class" src={image} alt="landing_image" height="500px" width="300px" ></img>
        <div className="heading_tab">
            <p className="heading">10X Team 007</p>
            <Link to="/posts"><button className="button">Enter</button></Link>
        </div>
    </div>
}

export default LandPage
