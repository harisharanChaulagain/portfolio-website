import "./AboutMe.scss";
import aboutMeImage from "../../assets/hari1.jpg";

const AboutMe = () => {
  return (
    <div className="about-main">
      <div className="main-section">
        <div className="first">
          <h2>About Me</h2>
          <img
            src={aboutMeImage}
            alt="about me image"
            className="aboutme-image"
          />
        </div>
        <div>
          👋 Hello there! I'm Hari Sharan Chaulagain, a passionate and creative
          computer science graduate from NIST College, Banepa. Armed with a
          Bachelor's degree and a zest for coding, I bring a diverse skill set
          to the table.
          <br />
          <br />
          💻 My playground includes JavaScript, TypeScript, HTML, CSS, React,
          Node.js, Express, MongoDB, and MySQL. Throughout my academic journey,
          I immersed myself in a 3-month internship during my 8th semester,
          gaining valuable real-world experience.
          <br /> <br />
          🚀 I thrive on turning ideas into reality and have a knack for
          crafting robust solutions. My project portfolio boasts a range of
          creations, from sleek portfolio websites to dynamic e-commerce
          platforms and efficient task managers.
          <br /> <br />
          🌐 Exploring the digital realm is not just a career for me; it's a
          constant adventure. Join me on this journey of innovation, where every
          line of code tells a story and every project is a testament to my
          dedication to excellence.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
