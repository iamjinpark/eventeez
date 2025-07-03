export function injectFontLinks(fontLinks) {
  fontLinks.forEach((link) => {
    if (!document.querySelector(`link[href="${link}"]`)) {
      const el = document.createElement("link");
      el.rel = "stylesheet";
      el.href = link;
      document.head.appendChild(el);
    }
  });
}
