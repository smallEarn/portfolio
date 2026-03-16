import React from "react";
import "../styles/ResumePage.scss";

export default function ResumePage() {
  return (
    <div className="resumePage">
      <div className="titleRow">
        <h1 className="pageTitle">Resume</h1>
        <div className="titleUnderline" />
      </div>

      <p className="summary">
        Full-Stack Developer focused on building responsive web applications,
        custom WordPress solutions, and practical systems using React and Laravel.
      </p>

      <div className="resumeGrid">
        {/* LEFT COLUMN */}
        <section className="resumeCol">
          <h2 className="sectionTitle">Experience</h2>

          <div className="timelineCard">
            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">Software Engineer / Full-Stack Engineer</div>
                  <div className="datePill">2022 — Present</div>
                </div>

                <div className="place">Thy Web Development Inc. • Remote</div>

                <div className="highlightList">
                  <div className="highlightItem">
                    <span className="highlightLabel">WordPress</span>
                    <p>
                      Built custom WordPress themes from scratch based on Figma
                      and Adobe XD designs.
                    </p>
                  </div>

                  <div className="highlightItem">
                    <span className="highlightLabel">Frontend</span>
                    <p>
                      Converted UI/UX designs into responsive, pixel-perfect
                      websites.
                    </p>
                  </div>

                  <div className="highlightItem">
                    <span className="highlightLabel">Full-Stack</span>
                    <p>
                      Developed web applications using React for frontend and
                      Laravel for backend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className="resumeCol">
          <h2 className="sectionTitle">Highlights</h2>

          <div className="miniCard">
            <div className="miniCard__title">Core Focus</div>
            <p>WordPress Development, React Interfaces, Laravel Systems</p>
          </div>

          <div className="miniCard">
            <div className="miniCard__title">Strengths</div>
            <p>Responsive UI, clean code, theme development, API-based systems</p>
          </div>

          <div className="miniCard">
            <div className="miniCard__title">Education</div>
            <p className="miniCard__strong">BS in Information Technology</p>
            <p>University of Negros Occidental - Recoletos</p>
            <span className="miniCard__date">2018 — 2019</span>
          </div>

          <a href="./CV-PRECIOUS.pdf" download="Precious_CV.pdf" className="ctaBtn">
            Download Full CV
          </a>
        </section>
      </div>
    </div>
  );
}