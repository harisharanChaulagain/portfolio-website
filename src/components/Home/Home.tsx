import "./Home.scss";
import image from "../../assets/hari1.jpg";

const Home = () => {
  return (
    <div className="home-main">
      <div className="first">
        <h1>Hi, </h1>
        <h1>My Name is HARI SHARAN CHAULAGAIN</h1>
        <h2>I'm a Web Developer!!!</h2>
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
