const english = new URLSearchParams(location.search).get("lang") === "en";

if (english) {
  document.documentElement.lang = "en";
  for (const label of document.querySelectorAll("[data-en]")) {
    label.textContent = label.dataset.en;
  }
  for (const label of document.querySelectorAll("[data-en-label]")) {
    label.setAttribute("aria-label", label.dataset.enLabel);
  }
  for (const score of document.querySelectorAll("td.points:not(.placement)")) {
    score.textContent = score.textContent.replace(",", ".");
  }
}

const languageLinks = document.querySelectorAll(".language-toggle a");
function updateLanguageLinks() {
  for (const link of languageLinks) {
    link.href = `?lang=${link.hreflang}${location.hash}`;
    if (link.hreflang === document.documentElement.lang) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

updateLanguageLinks();
window.addEventListener("hashchange", updateLanguageLinks);
