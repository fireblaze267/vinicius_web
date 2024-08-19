import { Git, Github, Linkedin } from "react-bootstrap-icons";
import "./styles.scss";

export default function Navbar() {
  return (
    <nav className="nav-main">
      <div className="nav-logo">
        <h1>Vinicius</h1>
        <span>Web developer</span>
      </div>

      <div className="nav-links">
        <div className="nav-links-item">
          <Linkedin width={25} height={25} />
        </div>

        <div className="nav-links-item">
          <Github width={25} height={25} />
        </div>

        <div className="nav-links-item">
          <Git width={25} height={25} />
        </div>
      </div>
    </nav>
  );
}
