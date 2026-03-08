(function() {
  const isFinnishDomain = window.location.hostname.endsWith('.fi');
  const path = window.location.pathname;
  if (isFinnishDomain && path === '/') {
    window.location.replace('/fi/');
  }
})();