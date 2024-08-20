import { useState } from "react";
import { Collection } from "react-bootstrap-icons";
import { options } from "./options";
import "./styles.scss";

export default function Projects() {
  const [selectOption, setSelectOption] = useState(0);

  return (
    <div className="projects-main">
      <div className="projects-gradient"></div>
      <div className="projects-title">
        <Collection />
        <h1>Projetos</h1>
      </div>
      <div className="projects-container">
        <div className="projects-container-menu">
          {options.map((x, idx) => {
            return (
              <div
                onClick={() => setSelectOption(x.key)}
                key={idx}
                className={
                  selectOption === x.key
                    ? "projects-container-menu-tabs projects-container-menu-tabs-active "
                    : "projects-container-menu-tabs"
                }
              >
                <span>{x.title}</span>
              </div>
            );
          })}
        </div>
        <div className="projects-container-content">
          <div className="projects-container-content-card">
            <img
              src={options[selectOption].img}
              alt={options[selectOption].title}
            />

            <div className="projects-container-content-text">
              <h1>{options[selectOption].title}</h1>
              <p>{options[selectOption].text}</p>
              <button>Visualizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
