import React from "react";
import "../styles/ResumePage.scss";

export default function ResumePage() {
  return (
    <div className="resumePage">
      <div className="titleRow">
        <h1 className="pageTitle">Resume</h1>
        <div className="titleUnderline" />
      </div>

      {/* SUMMARY */}
      <p className="summary">
        Full-Stack Developer with hands-on experience building responsive web applications from front end to back end. Passionate about writing clean, efficient code and creating practical solutions that improve user experience and business performance. Seeking an opportunity to contribute my skills and continue growing as a developer.
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
                <div className="place">Thy Web Development Inc., • Remote</div>
                <h2>Wordpress Development</h2>
                <ul className="bullets">
                  <li>Developed custom WordPress themes from scratch based on Figma and Adobe XD designs.</li>
                  <li>Converted UI/UX designs into responsive, pixel-perfect websites.</li>
                </ul>
                  <h2>React & Laravel System Development</h2>
                <ul className="bullets">
                  <li>Built full-stack web applications using React (frontend) and Laravel (backend).</li>
                </ul>
             
              </div>
            </div>
          </div>

          
        </section>

        {/* RIGHT COLUMN */}
        <section className="resumeCol">
          <h2 className="sectionTitle">Education</h2>
          <div className="timelineCard">
            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">BS in Information Technology</div>
                  <div className="datePill">2018 — 2019</div>
                </div>
                <div className="place">University of Negros Occidental - Recoletos</div>
                <p className="desc">Relevant: Software Engineering, Databases, UI Design.</p>
              </div>
            </div>
          </div>

          {/* <h2 className="sectionTitle">Certifications</h2>
          <div className="timelineCard">
            <div className="timelineItem">
              <div className="dot" />
              <div className="content">
                <div className="top">
                  <div className="role">Certification Title</div>
                  <div className="datePill">2024</div>
                </div>
                <div className="place">Issuer</div>
                <p className="desc">Short description of what it covers.</p>
              </div>
            </div>
          </div> */}

          <div className="timelineCard">
            <a href="" className="cta-btn">Download Full CV</a>
          </div>
        </section>
      </div>

    </div>
  );
}