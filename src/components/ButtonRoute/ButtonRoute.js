import './ButtonRoute.css';
import { Link } from "react-router-dom";


const ButtonRoute = (props) => {
    return (
        <>
            <Link to="../components/Home/Home"><button className="btn-nav">Home</button></Link>
            <button className="btn-nav">About Us</button>
            <button className="btn-nav">Contact</button>
        </>
    );
}
export default ButtonRoute;