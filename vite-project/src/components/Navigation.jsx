import { Link } from "react-router-dom"

const Navigation = () =>{
    return (
        <div className="Navigation">
            <Link to= "/">About Me</Link>
            <Link to= "/contact">Contact</Link>
            <Link to= "/portfolio">Portfolio</Link>
            <Link to= "/resume">Resume</Link>
        </div>
    )
}
export default Navigation