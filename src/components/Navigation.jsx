import { Link } from "react-router-dom"

const Navigation = () =>{
    return (
        <div className="Navigation">
            <div>
            <Link to= "/">About Me</Link>
            </div>
            <div>
            <Link to= "/contact">Contact</Link>
            </div>
            <div>
            <Link to= "/portfolio">Portfolio</Link>
            </div>
            <div>
            <Link to= "/resume">Resume</Link>
            </div>
        </div>
    )
}
export default Navigation