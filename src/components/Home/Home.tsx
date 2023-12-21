import { useState, useEffect } from "react";
import "./Home.scss";
import image from "../../assets/hari1.png";
import { typeWriter } from "../../utils/typewriterUtils";

const Home = () => {
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const name = "HARI SHARAN CHAULAGAIN";
  const title = "Web Developer!!!";

  useEffect(() => {
    typeWriter(name, setNewName);
    typeWriter(title, setNewTitle);
  }, []);
  return (
    <div className="home-main">
      <div className="first">
        <h1>Hi, </h1>
        <h2>I'm {newName}</h2>
        <h3>
          I'm a <span>{newTitle}</span>
        </h3>
      </div>
      <div className="second">
        <div>
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
