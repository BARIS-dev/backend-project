import "./NavbarStyle.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
const NavbarItem = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-logo">BARIS</div>
        <div className="nav-line"></div>
        <div className="nav-header">
          <h3>Backend Project for DCI</h3>
        </div>
      </div>
      <div className="nav-center"></div>
      <div className="nav-right">
        <ul className="social-links">
          <li>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarItem;
