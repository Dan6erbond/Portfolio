/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css";

if (process.env.NODE_ENV === "development") {
  require("./src/styles/tailwind.css");
} else {
  require("./static/styles/tailwind.css");
}

export const wrapRootElement = ({ element }) => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme") || "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add(theme);
  }

  return element;
};
