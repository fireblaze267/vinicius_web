import { useEffect, useState } from "react";
import { Collection } from "react-bootstrap-icons";
import { options } from "./options";
import "./styles.scss";

export default function Projects() {
  const [selectOption, setSelectOption] = useState(0);
  const [userClick, setUserClick] = useState(false);

  useEffect(() => {
    var timeID = setTimeout(() => {
      handleMenu();
    }, 5000);

    if (userClick) {
      clearTimeout(timeID);
      var userTime = setTimeout(() => {
        setUserClick(false);
      }, 8000);
    } else if (userTime) {
      clearTimeout(userTime);
      userTime = setTimeout(() => {
        setUserClick(false);
      }, 8000);
    }
  }, [selectOption, userClick]);

  function handleMenu() {
    let idx = options.length - 1;

    setSelectOption(selectOption == idx ? 0 : selectOption + 1);
  }

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
                onClick={() => {
                  setSelectOption(x.key), setUserClick(true);
                }}
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

          <div className="projects-container-content-text">
            <h1>{options[selectOption].title}</h1>
            <span>{options[selectOption].text}</span>
            <button>Visualizar</button>
          </div>
        </div>
        <div className="projects-container-content">
          <div className="projects-container-content-card">
            {options.map(({ img, title, key }) => {
              return (
                <img
                  key={key}
                  loading="lazy"
                  className="projects-container-content-card-image"
                  src={img}
                  alt={title}
                  style={
                    key === selectOption
                      ? {
                          zIndex: 100,
                          animation: "showUpNew 0.6s",
                        }
                      : { zIndex: 0, opacity: 0 }
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
