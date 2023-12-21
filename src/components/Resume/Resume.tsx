import "./Resume.scss";
import { FaEye } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import pdfFile from "../../assets/cv.pdf";

const Resume = () => {
  const handleViewCV = () => {
    window.open(pdfFile, "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "CV.pdf";
    link.click();
  };
  return (
    <div className="resume-main">
      <div className="main">
        <button style={{ background: "#2196f3" }} onClick={handleViewCV}>
          <FaEye />
          View CV
        </button>
        <button style={{ background: "#00cc00" }} onClick={handleDownloadCV}>
          <FaArrowDown />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Resume;
