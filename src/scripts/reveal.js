// Scroll-triggered reveals. Elements opt in with the .reveal class.
// Content is visible by default; the hidden-then-animate state is gated on
// `html.reveal-ready` (set by an inline <head> script only when JS runs and
// motion is allowed), so a no-JS or prerendered load never ships blank.

function initReveals() {
  // Tell the head safety-net that this script ran, so it won't force-reveal.
  document.documentElement.setAttribute("data-reveal-active", "");

  const revealEls = document.querySelectorAll(".reveal");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // No motion, or no observer support: show everything immediately.
  if (reduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReveals);
} else {
  initReveals();
}
