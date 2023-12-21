import "./Header.scss";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div className="header-main">
      <div className="top-section">
        <div className="toogle-icon">
          <IoReorderThree onClick={handleToggle} />
        </div>
        <h1 className="title">Portfolio Website</h1>
      </div>
      <div className="items-main-md ">
        <Link to="home" className="items">
          Home
        </Link>
        <Link to="about" className="items">
          About
        </Link>
        <Link to="projects" className="items">
          Projects
        </Link>
        <Link to="resume" className="items">
          Resume
        </Link>
        <Link to="contact" className="items">
          Contact
        </Link>
      </div>
      {toggleIcon && (
        <div className="items-main">
          <Link to="home" className="items">
            Home
          </Link>
          <Link to="about" className="items">
            About
          </Link>
          <Link to="projects" className="items">
            Projects
          </Link>
          <Link to="resume" className="items">
            Resume
          </Link>
          <Link to="contact" className="items">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
