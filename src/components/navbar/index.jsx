import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import "./styles.scss";

export default function Navbar() {
  return (
    <nav className="nav-main">
      <div className="nav-logo">
        <h1>Vinicius</h1>
        <span>Developer</span>
      </div>

      <div className="nav-links">
        <a href="https://www.linkedin.com/in/vinicius-gama/" target="_blank">
          <div className="nav-links-item">
            <FaLinkedin width={25} height={25} />
          </div>
        </a>

        <a href="https://github.com/fireblaze267" target="_blank">
          <div className="nav-links-item">
            <FaGithub width={25} height={25} />
          </div>
        </a>

        <a href="https://github.com/fireblaze267/vinicius_web" target="_blank">
          <div className="nav-links-item">
            <FaGitAlt width={25} height={25} />
          </div>
        </a>
      </div>
    </nav>
  );
}
