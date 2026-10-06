// The slide on the home page, with a small working copy of QRedirect's overlay:
// ⌥Q (or the button) dims it and frames the codes, hover shows where a code goes,
// a click, Enter or its number "opens" it, esc closes.
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const stage = document.getElementById("stage");
    if (!stage) return;
    const codes = [...stage.querySelectorAll(".code")];
    const toast = stage.querySelector(".toast");
    const t = (key) => (window.QRedirectI18n ? window.QRedirectI18n.t(key) : key);
    let toastTimer;

    // Badge and destination chip for each code, like the app draws them.
    for (const code of codes) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = code.dataset.code;
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.innerHTML = "<i></i><span><b></b><span></span></span>";
      code.append(badge, chip);
    }

    function fillChips() {
      for (const code of codes) {
        const chip = code.querySelector(".chip");
        chip.querySelector("b").textContent =
          code.dataset.kind === "wifi" ? "Studio Guest" : "google.com";
        chip.querySelector("b + span").textContent = t("demo.enter");
      }
    }

    const isOpen = () => stage.classList.contains("scanning");

    function open() {
      if (isOpen()) return;
      fillChips();
      stage.classList.add("scanning");
    }

    function close() {
      stage.classList.remove("scanning");
      codes.forEach((code) => code.classList.remove("hover"));
    }

    function hover(code) {
      codes.forEach((c) => c.classList.toggle("hover", c === code));
    }

    function activate(code) {
      if (!code) return;
      const message = code.dataset.kind === "wifi" ? t("demo.copied") : t("demo.opened");
      close();
      clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add("show");
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
    }

    stage.parentElement.querySelector(".demo-start").addEventListener("click", open);

    for (const code of codes) {
      code.addEventListener("mouseenter", () => isOpen() && hover(code));
      code.addEventListener("mouseleave", () => code.classList.remove("hover"));
      code.addEventListener("click", () => isOpen() && activate(code));
    }
    // Clicking the dimmed slide outside a code does nothing, as in the app.

    document.addEventListener("keydown", (event) => {
      // ⌥Q types "œ", so match the physical key.
      if (event.altKey && !event.metaKey && !event.ctrlKey && event.code === "KeyQ") {
        event.preventDefault();
        isOpen() ? close() : open();
        return;
      }
      if (!isOpen()) return;
      if (event.key === "Escape") {
        close();
      } else if (event.key === "Enter") {
        event.preventDefault();
        activate(stage.querySelector(".code.hover") || codes[0]);
      } else if (/^[1-9]$/.test(event.key)) {
        activate(codes.find((code) => code.dataset.code === event.key));
      }
    });
  });
})();
