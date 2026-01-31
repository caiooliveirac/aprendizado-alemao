import { renderHome } from "./pages/homePage.js";
import "./styles/global.css";

const app = document.querySelector("#app");

if (app) {
  app.appendChild(renderHome());
}
