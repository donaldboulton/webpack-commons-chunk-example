document.addEventListener("DOMContentLoaded", route);

window.addEventListener("hashchange", route, false);

const home = _ =>
  import(/* webpackChunkName: "pages/home" */ "./pages/home").then(
    ({ default: home }) => render(home())
  );

const about = _ =>
  import(/* webpackChunkName: "pages/about" */ "./pages/about").then(
    ({ default: about }) => render(about())
  );

function route() {
  switch (window.location.hash) {
    case "":
    case "#":
    case "#/":
      return home();

    case "#/about":
      return about();

    default:
      window.alert("Path not found");
  }
}

function render(html) {
  document.getElementById("main").innerHTML = html;
}
