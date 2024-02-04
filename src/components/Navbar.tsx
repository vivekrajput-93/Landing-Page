
import { useState } from "react";
import logo from "../../public/logo.png";
import "../CSS/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


  return (
    <div className="main-container flex p-5 justify-between  items-center h-98">
      <img src={logo} alt="logo-img" className="h-9 w-9" />
      <ul className={click ? "active" : "nav-link-container flex gap-10 p-3 pr-4 pl-4 "}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
      <section className="nav-btn flex gap-10 pr-9">
        <span className="drop p-3">
          ENG <KeyboardArrowDownIcon />
        </span>
        <button className="nav-btn rounded-full bg-blue-600 p-5 pt-2 pb-2 text-white">
          Schedule a Call
        </button>
      </section>
      <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
    </div>
  );
};

export default Navbar;
