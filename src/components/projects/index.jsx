import { useState } from "react";
import { Link } from "react-bootstrap-icons";
import { options } from "./options";
import "./styles.scss";

export default function Projects() {
  const [selectOption, setSelectOption] = useState(0);

  function handleLink(link) {
    window.open(link);
  }

  return (
    <div className="projects-main">
      <div className="projects-container">
        <div className="projects-text">
          <h1>Projetos</h1>
          <p>Amostra de texto para debug</p>
        </div>
        <div className="projects-display">
          {options.map((x) => {
            return (
              <div key={x?.key} className="projects-card">
                <div className="projects-card-img">
                  <img src={x?.img} alt="degub" />
                  <Link onClick={() => handleLink(x?.img)} />
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
