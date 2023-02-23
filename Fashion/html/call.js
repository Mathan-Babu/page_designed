var baseUrl = "/";
function loadCommonHtml(url, id) {
    fetch(baseUrl + url)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(id).innerHTML = html;
      })
      .catch((error) => {
        console.warn(error);
      });
  }