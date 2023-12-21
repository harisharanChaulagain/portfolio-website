import "./Header.scss";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <div className="header-main">
      <div className="toogle-icon">
        <IoReorderThree onClick={() => setToggleIcon(!toggleIcon)} />
      </div>
      <div className="items-main">
        <Link to="home" className={`items ${toggleIcon && "d-none"}`}>
          Home
        </Link>
        <Link to="about" className={`items ${toggleIcon && "d-none"}`}>
          About
        </Link>
        <Link to="projects" className={`items ${toggleIcon && "d-none"}`}>
          Projects
        </Link>
        <Link to="resume" className={`items ${toggleIcon && "d-none"}`}>
          Resume
        </Link>
        <Link to="contact" className={`items ${toggleIcon && "d-none"}`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
