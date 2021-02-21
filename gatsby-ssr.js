import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { MDXProvider } from "@mdx-js/react";
import * as React from "react";
import components from "./src/components/markdown/components";
import "./src/styles/global.css";

if (process.env.NODE_ENV === "development") {
  require("./src/styles/tailwind.css");
} else {
  require("./static/styles/tailwind.css");
}
deckDeckGoHighlightElement();

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "dark",
  });
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
