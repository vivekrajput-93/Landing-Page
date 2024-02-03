import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import "../CSS/Navbar.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () => {
    return (
        <div className="main-container flex p-5 justify-between  items-center h-98">
            <img src={logo} alt="logo-img" className="h-9 w-9" />
            <ul className="nav-link-container flex gap-10 p-3 pr-4 pl-4 ">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            <section className="navbar-button flex gap-10 pr-9">
                <span className="drop p-3">ENG <KeyboardArrowDownIcon /></span>
                <button className="nav-btn rounded-full bg-blue-600 pl-2 pr-2 text-white p-2">Schedule a Call</button>
            </section>
        </div>
    )
}

export default Navbar;
