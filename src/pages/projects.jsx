import clsx from "clsx";
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const projects = [
  {
    title: "Who Wants To Be A Millionaire",
    description:
      "A web-based version of the Who Wants To Be A Millionaire game built with ASP.NET Core and React.",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/Dan6erbond/WhoWantsToBeAMillionaire",
      },
    ],
  },
  {
    title: "Usage of IT Tools and Software in Corporate Workflows",
    description:
      "My dissertation on automation and the usage of IT tools in corporate workflows.",
    links: [
      {
        title: "Read More",
        to: "/blog/idpa",
      },
    ],
  },
  {
    title: "GraphQL-Utils",
    description:
      "An open-source NPM package I designed to aid in creating high-performance GraphQL APIs.",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/Jenyus-Org/graphql-utils",
      },
    ],
  },
  {
    title: "GTAOnline",
    description:
      "A website built with React to track and display GTAOnline content updates.",
    links: [
      {
        title: "Site",
        href: "http://gtaonline-cf0ea.web.app/",
      },
      {
        title: "GitHub",
        href: "https://github.com/GTAOnline-Mods/GTA-Weekly-Updates",
      },
      {
        title: "Read More",
        href: "patreon.com/posts/45601369",
      },
    ],
  },
];

const ProjectsPage = () => {
  const linkClasses = [
    "text-orange-500",
    "transition-all",
    "rounded-md",
    "border",
    "border-orange-500",
    "px-2",
    "py-1",
    "hover:ring-1",
    "hover:ring-orange-500",
    "hover:shadow-md",
    "mr-2",
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className={clsx(
          "px-4",
          "md:px-8",
          "py-8",
          "mx-auto",
          "max-w-screen-lg",
        )}>
        <h1 className={clsx("text-3xl", "mb-4")}>Projects</h1>
        <p className={clsx("mb-8")}>
          Get a feeling for the work I do and check out some of my projects!
        </p>
        <div className={clsx("grid", "sm:grid-cols-2", "gap-4")}>
          {projects.map((project) => (
            <div
              className={clsx(
                "p-6",
                "bg-navy-600",
                "rounded-lg",
                "shadow-lg",
                "flex",
                "flex-col",
              )}>
              <p
                className={clsx(
                  "text-2xl",
                  "leading-8",
                  "md:text-3xl",
                  "mb-2",
                  "leading-9",
                )}>
                {project.title}
              </p>
              <p className={clsx("mb-8", "text-gray-400")}>
                {project.description}
              </p>
              <div
                className={clsx(
                  "flex",
                  "flex-row-reverse",
                  "mt-auto",
                  "-mr-2",
                )}>
                {project.links.map((link) =>
                  link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      className={clsx(linkClasses)}>
                      {link.title}
                    </a>
                  ) : (
                    <Link to={link.to} className={clsx(linkClasses)}>
                      {link.title}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
