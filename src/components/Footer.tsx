import logo from "../../public/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../CSS/Footer.css";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <div className="main-footer-container mt-3">
      <section className="footer-top-container flex flex-col md:flex-row md:justify-around w-full mb-8">
        <ul className="mb-4 md:mb-0">
          <li>Product</li>
          <li>Employee Database</li>
          <li>Payroll</li>
          <li>Absence</li>
          <li>Time Tracking</li>
          <li>Shift Planner</li>
          <li>Recruiting</li>
        </ul>
        <ul className="mb-4 md:mb-0">
          <li>Information</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
        <ul className="mb-4 md:mb-0">
          <li>company</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Contact us</li>
          <li>Lift Media</li>
        </ul>
        <section className="subs-container block max-w-80 p-6 bg-slate-50 border border-gray-200 rounded-lg shadow-md md:ml-4 md:mr-4 md:w-1/3">
          <h3 className="ml-2">Subscribe</h3>
          <input
            type="text"
            placeholder="Email Address"
            className="outline-none mt-3 mb-3 ml-3 border p-2 rounded-2xl text-sm border-gray-200"
          />
           {/* <div className="arrow absolute flex justify-center items-center bg-blue-600 w-9 h-9 top-52 right-44 transform -translate-y-2/3 rounded-full">
            <ArrowForwardIcon className="text-white" /> 
          </div> */}
          <p className="text-sm text-slate-600 ml-2">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
        </section>
      </section>
      <hr />
      <section className="footer-bottom-container flex flex-col sm:flex-row p-5 justify-around gap-5 sm:gap-56 items-center h-98">
        <img src={logo} alt="logo-img" className="h-9 w-9" />
        <ul className="footer-page-container flex gap-9">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
        <ul className="social-footer-container flex gap-3">
          <li className="border border-black rounded-full p-2">
            <LinkedInIcon />
          </li>
          <li className="border border-black rounded-full p-2">
            <FacebookIcon />
          </li>
          <li className="border border-black rounded-full p-2">
            <TwitterIcon />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
