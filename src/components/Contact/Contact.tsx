import "./Contact.scss";
import phoneIcon from "../../assets/phone-icon.png";
import emailIcon from "../../assets/email-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";

const Contact = () => {
  return (
    <div className="contact-main">
      <h1>Contacts Details</h1>
      <div className="items">
        <div className="social-icon">
          <img src={phoneIcon} alt="img" /> : (+977) 9863441309
        </div>
        <div className="social-icon">
          <img src={emailIcon} alt="img" /> : chaulagaihari12345@gmail.com
        </div>
        <a
          href="https://www.linkedin.com/in/hari-sharan-chaulagain-592b4225b/"
          target="_blank"
          className="social-icon"
        >
          <img src={linkedinIcon} alt="img" />
        </a>
        <a
          href="https://github.com/harisharanChaulagain"
          target="_blank"
          className="social-icon"
        >
          <img src={githubIcon} alt="img" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
