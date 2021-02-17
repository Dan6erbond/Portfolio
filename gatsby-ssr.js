import "./src/styles/global.css";

if (process.env.NODE_ENV === "development") {
  require("./src/styles/tailwind.css");
} else {
  require("./static/styles/tailwind.css");
}

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "dark",
  });
};
