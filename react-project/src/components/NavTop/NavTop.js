import './NavTop.css';
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import ButtonRoute from '../ButtonRoute/ButtonRoute'


const NavTop = (props) => {
    return (
        <>
            <div className="box fixed-top bg-white">
                <div className="flex">
                    <span className="logo">Logo</span>
                    <div className="">
                   <ButtonRoute/>
                    </div>
                    <div className="flex">
                        <button className='btn-icon d-flex align-items-center me-2'>
                            <BsFacebook />
                        </button>
                        <button className='btn-icon d-flex align-items-center me-2'>
                            <BsYoutube />
                        </button>
                        <button className='btn-icon d-flex align-items-center me-2'>
                            <BsGithub />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavTop;