// Gentle magnetic pull for .magnetic elements: the element eases toward the
// cursor while hovered, then settles back. Fine-pointer devices only, and
// fully disabled under prefers-reduced-motion (the CSS also hard-resets it).

(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (reduced || !fine) return;

  const STRENGTH = 0.3; // fraction of the cursor offset the element follows
  const MAX = 8; // px cap so the pull stays subtle

  const clamp = (v) => Math.max(-MAX, Math.min(MAX, v));

  document.querySelectorAll(".magnetic").forEach((el) => {
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const mx = clamp((e.clientX - (r.left + r.width / 2)) * STRENGTH);
      const my = clamp((e.clientY - (r.top + r.height / 2)) * STRENGTH);
      el.style.setProperty("--mx", mx.toFixed(1) + "px");
      el.style.setProperty("--my", my.toFixed(1) + "px");
    };
    const reset = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
  });
})();
