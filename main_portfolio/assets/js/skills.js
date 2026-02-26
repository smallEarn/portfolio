document.addEventListener("DOMContentLoaded", () => {
  const row = document.querySelector(".main__skillRow");
  const line = document.querySelector(".main__progressLine");
  const fill = document.querySelector(".main__progressFill");

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

    const fillWidthPx = Math.max(12, lineWidth * visibleRatio); // min width optional
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

  update();
  row.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
});