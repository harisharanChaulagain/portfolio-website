import "./Header.scss";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <div className="header-main">
      <div className="toogle-icon">
        <IoReorderThree onClick={() => setToggleIcon(!toggleIcon)} />
      </div>
      <div className="items-main">
        <div className={`items ${toggleIcon && "d-none"}`}>Home</div>
        <div className={`items ${toggleIcon && "d-none"}`}>About</div>
        <div className={`items ${toggleIcon && "d-none"}`}>Projects</div>
        <div className={`items ${toggleIcon && "d-none"}`}>Resume</div>
        <div className={`items ${toggleIcon && "d-none"}`}>Contact</div>
      </div>
    </div>
  );
};

export default Header;
