import { useEffect, useMemo, useRef } from "react";
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
  const rowRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);

  const projects = [
    {
      title: "Finance Tracker",
      description: "Track expenses and manage personal finances.",
      link: "https://yourprojectlink.com",
      image: bishuku_img,
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack online store built with React and Node.js.",
      link: "https://yourprojectlink.com",
      image: s_img,
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and modern CSS.",
      link: "https://yourprojectlink.com",
      image: h_img,
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing daily tasks.",
      link: "https://yourprojectlink.com",
      image: kfc_img,
    },
    {
      title: "Weather App",
      description: "Real-time weather application using external API.",
      link: "https://yourprojectlink.com",
      image: meiji_img,
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app using WebSockets.",
      link: "https://yourprojectlink.com",
      image: seiwa_img,
    },
    {
      title: "Blog Platform",
      description: "Custom blog platform with authentication system.",
      link: "https://yourprojectlink.com",
      image: totofull_img,
    },
    {
      title: "Booking System",
      description: "Online appointment booking system.",
      link: "https://yourprojectlink.com",
      image: writerity_img,
    },
  ];

  const projectPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < projects.length; i += 4) {
      pages.push(projects.slice(i, i + 4));
    }
    return pages;
  }, [projects]);

  useEffect(() => {
    const row = rowRef.current;
    const line = lineRef.current;
    const fill = fillRef.current;

    if (!row || !line || !fill) return;

    const update = () => {
      const maxScroll = row.scrollWidth - row.clientWidth;

      if (maxScroll <= 0) {
        fill.style.width = "100%";
        fill.style.transform = "translateX(0px)";
        return;
      }

      const visibleRatio = row.clientWidth / row.scrollWidth;
      const lineWidth = line.clientWidth;

      const fillWidthPx = Math.max(12, lineWidth * visibleRatio);
      fill.style.width = `${fillWidthPx}px`;

      const maxTravelPx = lineWidth - fillWidthPx;

      let ratio = row.scrollLeft / maxScroll;

      if (row.scrollLeft >= maxScroll - 2) ratio = 1;
      if (row.scrollLeft <= 2) ratio = 0;

      const x = Math.round(ratio * maxTravelPx);
      fill.style.transform = `translateX(${x}px)`;
    };

    const handleWheel = (e) => {
      if (row.scrollWidth <= row.clientWidth) return;

      const { deltaX, deltaY } = e;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        return;
      }

      e.preventDefault();
      row.scrollLeft += deltaY;
    };

    update();

    row.addEventListener("scroll", update, { passive: true });
    row.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(update);
    ro.observe(row);
    ro.observe(line);

    return () => {
      row.removeEventListener("scroll", update);
      row.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="tab-content active" id="portfolio">
      <div className="main__header">
        <h1 className="main__title">Projects</h1>
        <div className="main__underline"></div>
      </div>

      <div className="projects-wrapper" ref={rowRef}>
        <div className="projects-pages">
          {projectPages.map((page, pageIndex) => (
            <div className="projects-page" key={pageIndex}>
              {page.map((project, index) => (
                <div className="project-card" key={`${pageIndex}-${index}`}>
                  <div
                    className="project-header"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-content">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="main__progressLine" ref={lineRef}>
        <div className="main__progressFill" ref={fillRef} />
      </div>
    </div>
  );
}