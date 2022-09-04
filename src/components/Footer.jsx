function Footer() {
  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = weekday[date.getDay()];

  return (
    <footer className="footer padding100">
      <ul className="social-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/pushkarsingh019"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/stoicpushkar"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stoicpushkar/"
        >
          Linkedin
        </a>
      </ul>
      <span>Have A Wonderfull {day} ❤️</span>
    </footer>
  );
}

export default Footer;
