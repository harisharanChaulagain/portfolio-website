import "./Home.scss";
import image from "../../assets/img1.jpg";

const Home = () => {
  return (
    <div className="home-main">
      <div className="first">
        <h1>Hi, </h1>
        <h1>My Name is HARI</h1>
        <h1> SHARAN CHAULAGAIN</h1>
        <h1></h1>
        <h2>I'm a Web Developer!!!</h2>
      </div>
      <div className="second">
        <div className="img-container">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
