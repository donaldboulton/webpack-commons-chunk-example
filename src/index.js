import {home, about} from "./modules"

document.addEventListener("DOMContentLoaded", route);

window.addEventListener("hashchange", route, false);

function route() {
  switch (window.location.hash) {
    case "":
    case "#":
    case "#/":
      return home().then(
        ({ default: home }) => render(home())
      );

    case "#/about":
      return about().then(
        ({ default: about }) => render(about())
      );

    default:
      window.alert("Path not found");
  }
}

function render(html) {
  document.getElementById("main").innerHTML = html;
}
