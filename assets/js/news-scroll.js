// Auto-scroll homepage news without relying on third-party libraries.
document.querySelectorAll(".news-carousel").forEach((carousel) => {
  const track = carousel.querySelector(".news-carousel-track");
  if (!track) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pixelsPerSecond = 16;
  let pointerActive = false;
  let pauseUntil = 0;
  let previousTimestamp = performance.now();

  carousel.addEventListener("pointerdown", () => (pointerActive = true));

  const resumeAfterInteraction = () => {
    pointerActive = false;
    pauseUntil = performance.now() + 1500;
  };

  window.addEventListener("pointerup", resumeAfterInteraction);
  window.addEventListener("pointercancel", resumeAfterInteraction);
  carousel.addEventListener("wheel", () => (pauseUntil = performance.now() + 1500), { passive: true });
  carousel.addEventListener("keydown", () => (pauseUntil = performance.now() + 1500));

  const autoScroll = () => {
    const timestamp = performance.now();
    const paused = pointerActive || timestamp < pauseUntil || reducedMotion.matches;
    if (!paused) {
      carousel.scrollTop += ((timestamp - previousTimestamp) * pixelsPerSecond) / 1000;
      const cycleHeight = track.scrollHeight / 2;
      if (cycleHeight > 0 && carousel.scrollTop >= cycleHeight) {
        carousel.scrollTop -= cycleHeight;
      }
    }
    previousTimestamp = timestamp;
  };

  window.setInterval(autoScroll, 50);
});
