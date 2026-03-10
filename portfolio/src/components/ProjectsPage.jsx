import "../styles/ProjectsPage.scss";

import bishuku_img from "../assets/img/bishuku_project.png";
import s_img from "../assets/img/3s_project.png";
import h_img from "../assets/img/3h-ms_project.png";
import kfc_img from "../assets/img/kfc_project.png";
import meiji_img from "../assets/img/meiji_project.png";
import seiwa_img from "../assets/img/seiwa_project.png";
import totofull_img from "../assets/img/totofull_project.png";
import writerity_img from "../assets/img/writerity_project.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Finance Tracker",
      description: "Track expenses and manage personal finances.",
      link: "https://yourprojectlink.com",
      image: bishuku_img,
      stack: ["React", "PHP", "MySQL"],
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack online store built with React and Node.js.",
      link: "https://yourprojectlink.com",
      image: s_img,
      stack: ["React", "Node.js", "REST API"],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and modern CSS.",
      link: "https://yourprojectlink.com",
      image: h_img,
      stack: ["React", "SCSS"],
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing daily tasks.",
      link: "https://yourprojectlink.com",
      image: kfc_img,
      stack: ["JavaScript", "PHP"],
    },
    {
      title: "Weather App",
      description: "Real-time weather application using external API.",
      link: "https://yourprojectlink.com",
      image: meiji_img,
      stack: ["React", "API"],
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app using WebSockets.",
      link: "https://yourprojectlink.com",
      image: seiwa_img,
      stack: ["Node.js", "WebSocket"],
    },
    {
      title: "Blog Platform",
      description: "Custom blog platform with authentication system.",
      link: "https://yourprojectlink.com",
      image: totofull_img,
      stack: ["Laravel", "MySQL"],
    },
    {
      title: "Booking System",
      description: "Online appointment booking system.",
      link: "https://yourprojectlink.com",
      image: writerity_img,
      stack: ["React", "PHP"],
    },
  ];

  return (
    <section className="projectsSection" id="portfolio">
      <div className="main__header">
        <h1 className="main__title">Projects</h1>
        <div className="main__underline"></div>
      </div>

      <p className="projectsIntro">
        Selected projects that highlight my experience building responsive and
        scalable web applications.
      </p>

      <p className="scrollHint">Scroll down to see more projects ↓</p>

      <div className="projectsScrollArea">
        <div className="projectsGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={index}>
              <div className="projectCard__imageWrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="projectCard__body">
                <h3 className="projectCard__title">{project.title}</h3>

                <p className="projectCard__desc">{project.description}</p>

                <div className="projectCard__stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="projectCard__link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}