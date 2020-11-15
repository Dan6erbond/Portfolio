import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaReddit,
  FaStackOverflow,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>© RaviAnand Mohabir, 2020</div>
      <div>
        <a
          href="https://github.com/Dan6erbond"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>{" "}
        <a
          href="https://www.reddit.com/user/Dan6erbond"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReddit />
        </a>{" "}
        <a
          href="https://stackoverflow.com/users/9176391/dan6erbond"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow />
        </a>{" "}
        <a
          href="https://www.youtube.com/channel/UCV2HtVYzjMELIhy6L4CAdug"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>{" "}
        <a
          href="https://discord.gg/wMEyKZk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
