(function () {
  // Only run at the root path to avoid redirect loops
  if (window.location.pathname !== "/") return;

  // Skip redirect in local development — dev server only serves the default locale
  var host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".local")) return;

  // If the user has explicitly chosen Finnish via the language switcher, respect that
  try {
    if (localStorage.getItem("kobudo-locale") === "fi") return;
  } catch {}

  // Read the browser's ordered language preference list
  var langs = navigator.languages ? Array.from(navigator.languages) : [navigator.language || "fi"];

  // Check rankings of Finnish vs English
  var fiIndex = -1;
  var enIndex = -1;
  for (var i = 0; i < langs.length; i++) {
    var base = langs[i].toLowerCase().split("-")[0];
    if (base === "fi" && fiIndex === -1) fiIndex = i;
    if (base === "en" && enIndex === -1) enIndex = i;
  }

  // Redirect to /en/ when English is explicitly preferred over Finnish
  // (English ranked higher, or Finnish is absent from the preference list)
  var shouldGoEnglish = enIndex !== -1 && (fiIndex === -1 || enIndex < fiIndex);

  if (shouldGoEnglish) {
    window.location.replace("/en/");
  }
  // Otherwise stay at / (Finnish, the default locale)
})();
