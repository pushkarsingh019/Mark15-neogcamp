import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-links" to="/">
        Home
      </Link>
      <Link className="nav-links" to="/projects">
        Projects
      </Link>
      <Link className="nav-links" to="/blog">
        Blog
      </Link>
    </nav>
  );
}
