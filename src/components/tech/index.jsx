import { CaretRightFill } from "react-bootstrap-icons";
import "./styles.scss";

export default function Tech() {
  const techOptions = [
    {
      title: "React",
      icon: "",
    },
    {
      title: "Javascript",
      icon: "",
    },
    {
      title: "Node js",
      icon: "",
    },
    {
      title: "Wordpress",
      icon: "",
    },
    {
      title: "Figma",
      icon: "",
    },
    {
      title: "HTML 5",
      icon: "",
    },
    {
      title: "CSS 3",
      icon: "",
    },
  ];

  return (
    <div className="tech-main">
      <div className="tech-desc">
        <div className="tech-desc-title">
          <h1>Habilidades</h1>
          <p>Soluções web inovadoras e de alta qualidade.</p>
        </div>
        <div class="tech-desc-soft">
          <h1>Soft skills</h1>
          <p>
            <CaretRightFill /> Resolução
          </p>
          <p>
            <CaretRightFill />
            Adaptabilidade
          </p>
          <p>
            <CaretRightFill />
            Autodidatismo
          </p>
        </div>
      </div>
      <div class="tech-container">
        {techOptions.map((x, idx) => {
          return (
            <div key={idx} className="tech-item">
              <label>{x?.title}</label>
              {x.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
