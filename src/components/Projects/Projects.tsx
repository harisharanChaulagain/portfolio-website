import "./Projects.scss";

const projectsList = [
  {
    title: "E-Commerce Website",
    duration: "November 2023 – present",
    description:
      " Built a responsive MERN stack e-commerce site with secure JWT-based authentication, Khalti payment integration, and admin features for streamlined product and category management.",
    technology: " React ts, Node, Express, Mongodb, Formik & Yup, React Query",
    link: " https://github.com/harisharanChaulagain/ecommerce ",
  },
  {
    title: "Simple Task Manager",
    duration: "December 2023",
    description:
      " Built a MERN stack Task Manager enabling users to add, prioritize, and delete tasks. Implemented a completion feature redirecting completed tasks to a separate page with restricted deletion access.",
    technology: " React, Express js, Node js, Mongodb",
    link: " https://github.com/harisharanChaulagain/simple-task-manager  ",
  },
];

const Projects = () => {
  return (
    <div className="project-main">
      <div>
        <h2>Projects</h2>
        {projectsList.map((project, index) => (
          <div key={index}>
            <div className="title">
              <span>{project.title}</span>
              <span>[{project.duration}]</span>
            </div>
            <div>{project.description}</div>
            <div>
              <span>Technology Used :</span>
              <span>{project.technology}</span>
            </div>
            <div>
              <span>Link :</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
