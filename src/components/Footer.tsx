import logo from "../../public/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <section></section>
      <hr />
      <section className="footer-bottom-container flex p-5 justify-between items-center h-98">
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
