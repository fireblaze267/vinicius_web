import { CaretRightFill } from "react-bootstrap-icons";
import { FaNodeJs, FaWordpress } from "react-icons/fa";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import "./styles.scss";

export default function Tech() {
  const techOptions = [
    {
      title: "React",
      icon: <FaReact />,
    },
    {
      title: "Javascript",
      icon: <FaJs />,
    },
    {
      title: "Node js",
      icon: <FaNodeJs />,
    },
    {
      title: "Wordpress",
      icon: <FaWordpress />,
    },
    {
      title: "Figma",
      icon: <FaFigma />,
    },
    {
      title: "HTML 5",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS 3",
      icon: <FaCss3 />,
    },
  ];

  return (
    <div className="tech-main">
      <div className="tech-desc">
        <div className="tech-desc-title">
          <h1>Habilidades</h1>
          <p>Soluções web inovadoras e de alta qualidade.</p>
        </div>
        <div className="tech-desc-soft">
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
      <div className="tech-container">
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
