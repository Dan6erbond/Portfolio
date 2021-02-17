import "./src/styles/global.css";

if (process.env.NODE_ENV === "development") {
  require("./src/styles/tailwind.css");
} else {
  require("./static/styles/tailwind.css");
}

export const wrapRootElement = ({ element }) => {
  const theme = localStorage.getItem("theme") || "dark";
  localStorage.setItem("theme", theme);
  document.documentElement.classList.add(theme);

  return element;
};
