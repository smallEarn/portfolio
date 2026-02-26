  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".main__tab");
    const panels = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();

        // active tab
        tabs.forEach(t => t.classList.remove("main__tab--active"));
        tab.classList.add("main__tab--active");

        // active panel
        panels.forEach(p => p.classList.remove("active"));
        const id = tab.dataset.tab;
        const target = document.getElementById(id);
        if (target) target.classList.add("active");
      });
    });
  });