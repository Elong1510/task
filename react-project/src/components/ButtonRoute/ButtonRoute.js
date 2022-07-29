import './ButtonRoute.css';
import { Link } from "react-router-dom";

const ButtonRoute = (props) => {
    return (
        <>
        <Link to="/"><button className="btn-nav">Home</button></Link>
<Link to="/AboutUs"><button className="btn-nav">About Us</button></Link>
<Link to="/Contact"><button className="btn-nav">Contact</button></Link>
        </>
    );
}
export default ButtonRoute;