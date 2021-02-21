import clsx from "clsx";
import * as React from "react";

export const Paragraph = (props) => <p className={clsx("mb-2")} {...props} />;

export const Heading1 = (props) => (
  <h2 className={clsx("text-2xl", "mt-8")} {...props} />
);

export const Heading2 = (props) => (
  <h3 className={clsx("text-xl")} {...props} />
);

export const Heading3 = (props) => (
  <h4 className={clsx("text-lg")} {...props} />
);

export const Heading4 = (props) => <h5 {...props} />;

export const Heading5 = (props) => <h6 {...props} />;

export const Heading6 = (props) => <p {...props} />;

export const List = (props) => <ul className={clsx("list-disc", "list-inside", "mb-2")} {...props} />;

export default {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  ul: List,
};
