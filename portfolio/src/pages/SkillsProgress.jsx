import { useEffect, useRef } from "react";
import firebaseIcon from "../assets/img/icon-firebase.png";
import dockerIcon from "../assets/img/icon-docker.png";
import laravelIcon from "../assets/img/icon-laravel.png";
import gitIcon from "../assets/img/icon-git.png";
import htmlIcon from "../assets/img/icon-html.png";
import cssIcon from "../assets/img/icon-css3.png";
import javascriptIcon from "../assets/img/icon-javascript.png";
import reactIcon from "../assets/img/icon-react.png";
import tailwindIcon from "../assets/img/icon-tailwindcss.png";
import documentIcon from "../assets/img/icon-document.png";


export function SkillsProgress() {
  const rowRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const line = lineRef.current;
    const fill = fillRef.current;

    if (!row || !line || !fill) return;

    const update = () => {
      const maxScroll = row.scrollWidth - row.clientWidth;

      // no overflow: fill entire line
      if (maxScroll <= 0) {
        fill.style.width = "100%";
        fill.style.transform = "translateX(0px)";
        return;
      }

      // Fill width = visible area ratio (like a scrollbar thumb)
      const visibleRatio = row.clientWidth / row.scrollWidth;
      const lineWidth = line.clientWidth;

      const fillWidthPx = Math.max(12, lineWidth * visibleRatio); // min width
      fill.style.width = `${fillWidthPx}px`;

      // How far the fill can travel inside the line
      const maxTravelPx = lineWidth - fillWidthPx;

      // Scroll ratio (0 → 1)
      let ratio = row.scrollLeft / maxScroll;

      // Force true end (fix fractional/rounding issues)
      if (row.scrollLeft >= maxScroll - 2) ratio = 1;
      if (row.scrollLeft <= 2) ratio = 0;

      // Pixel-perfect translate
      const x = Math.round(ratio * maxTravelPx);
      fill.style.transform = `translateX(${x}px)`;
    };

    // Run once after mount
    update();

    // Events
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Optional: if content changes size after load (fonts/images), observe resize
    const ro = new ResizeObserver(update);
    ro.observe(row);
    ro.observe(line);

    return () => {
      row.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="main__skills">
      <h3 className="main__sectionTitle">Skills</h3>

      <div className="main__skillRow" ref={rowRef}>
        {/* your skill items */}
        <article className="main__skill main__skill--s1">
            <img src={firebaseIcon} alt="Firebase" />
        </article>
        <article className="main__skill main__skill--s2">
            <img src={dockerIcon} alt="Docker" />
        </article>
        <article className="main__skill main__skill--s3">
            <img src={laravelIcon} alt="Laravel" />
        </article>
        <article className="main__skill main__skill--s4">
            <img src={javascriptIcon} alt="Javascript" />
        </article>
        <article className="main__skill main__skill--s1">
            <img src={reactIcon} alt="React" />
        </article>
        <article className="main__skill main__skill--s2">NODE</article>
        <article className="main__skill main__skill--s3">MYSQL</article>
        <article className="main__skill main__skill--s4">GIT</article>
      </div>

      <div className="main__progressLine" ref={lineRef}>
        <div className="main__progressFill" ref={fillRef} />
      </div>
    </div>
  );
}