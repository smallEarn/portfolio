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
      title: "E-Commerce Website",
      description: "Developed a responsive e-commerce website for a Japanese brand selling high-quality human hair wigs and hairpieces, including medical wigs. The platform allows users to browse products, view details, and purchase items online.",
      link: "https://bishuku.jp/",
      image: bishuku_img,
      stack: ["WordPress", "PHP", "MySQL", "HTML" ,"CSS"],
    },
    {
      title: "Healthcare / Medical Technology Website",
      description: "Developed a responsive website for a Japanese healthcare technology company that provides digital medical education tools for auscultation training and healthcare professionals.",
      link: "https://telemedica.jp/ja/",
      image: s_img,
      stack: ["React", "Laravel", "REST API", "JavaScript", "HTML5", "SCSS"],
    },
    {
      title: "Corporate Healthcare Website",
      description: "Developed a responsive corporate website for a Japanese healthcare company providing medical support services, health management solutions, and healthcare consulting.",
      link: "https://3h-ms.co.jp/",
      image: h_img,
      stack: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Responsive Web Design"],
    },
    {
      title: "Corporate / Industry Support Website",
      description: "Developed a corporate website for the International Fashion Center in Tokyo that promotes industry support programs, seminars, and initiatives for fashion and lifestyle manufacturing companies.",
      link: "https://kfc-fashion.jp/",
      image: kfc_img,
      stack: ["WordPress", "PHP", "HTML5", "CSS", "Javascript"],
    },
    {
      title: "University / Education Website",
      description: "Developed and maintained a responsive university website that provides information about academic programs, research initiatives, admissions, and campus activities for an institution specializing in pharmaceutical and life sciences education.",
      link: "https://www.my-pharm.ac.jp/en/",
      image: meiji_img,
      stack: ["WordPress", "PHP", "HTML5", "CSS", "Javascript"],
    },
    {
      title: "Corporate IT Company Website",
      description: "Developed and maintained a corporate website for an international IT company that offers web development, system development, and digital marketing services.",
      link: "https://writerity.com/",
      image: writerity_img,
      stack: ["WordPress", "PHP", "HTML5", "CSS", "Javascript"],
    },
    {
      title: "Education / School Website",
      description: "A website for Totoful, an educational institution that provides learning programs and educational services for students. The platform shares information about courses, programs, school activities, and announcements for students and parents.",
      link: "https://totoful.com/",
      image: totofull_img,
      stack: ["WordPress", "PHP", "HTML5", "SCSS", "Javascript"],
    },
    {
      title: "Corporate / Manufacturing Website",
      description: "A corporate website for Seiwa Co., Ltd., a Japanese manufacturing company that develops and produces industrial components and equipment. The website presents company information, product details, technology capabilities, and business solutions for industrial clients.",
      link: "https://www.seiwa.co.jp/",
      image: seiwa_img,
      stack: ["WordPress", "PHP", "HTML5", "SCSS", "Javascript"],
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