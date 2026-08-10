$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // Auto-scroll homepage news while keeping native manual scrolling available.
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll(".news-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".news-carousel-track");
    if (!track) return;

    let hovered = false;
    let focused = false;
    let pointerActive = false;
    let previousTimestamp;
    const pixelsPerSecond = 10;

    carousel.addEventListener("mouseenter", () => (hovered = true));
    carousel.addEventListener("mouseleave", () => (hovered = false));
    carousel.addEventListener("focusin", () => (focused = true));
    carousel.addEventListener("focusout", () => (focused = false));
    carousel.addEventListener("pointerdown", () => (pointerActive = true));
    carousel.addEventListener("pointerup", () => (pointerActive = false));
    carousel.addEventListener("pointercancel", () => (pointerActive = false));

    const autoScroll = (timestamp) => {
      const paused = hovered || focused || pointerActive || reducedMotion.matches;
      if (previousTimestamp !== undefined && !paused) {
        carousel.scrollTop += ((timestamp - previousTimestamp) * pixelsPerSecond) / 1000;
        const cycleHeight = track.scrollHeight / 2;
        if (cycleHeight > 0 && carousel.scrollTop >= cycleHeight) {
          carousel.scrollTop -= cycleHeight;
        }
      }
      previousTimestamp = timestamp;
      window.requestAnimationFrame(autoScroll);
    };

    window.requestAnimationFrame(autoScroll);
  });
});
