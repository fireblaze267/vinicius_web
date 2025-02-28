import { BsGithub, BsLink } from "react-icons/bs";
import { options } from "./options";
import "./styles.scss";

export default function Projects() {
  function handleLink(link) {
    window.open(link);
  }

  return (
    <div className="projects-main">
      <div className="projects-container">
        <div className="projects-text">
          <h1>
            <BsGithub
              onClick={() => handleLink("https://github.com/fireblaze267")}
            />
            Projetos
          </h1>
        </div>
        <div className="projects-display">
          {options.map((x) => {
            return (
              <div key={x?.key} className="projects-card">
                <div className="projects-card-img">
                  <img src={x?.img} alt="degub" />
                  <BsLink onClick={() => handleLink(x?.link)} />
                </div>
                <div className="projects-card-text">
                  <h1>{x?.title}</h1>
                  <p>{x?.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
