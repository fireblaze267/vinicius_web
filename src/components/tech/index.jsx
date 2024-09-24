import { CaretRightFill } from "react-bootstrap-icons";
import { FaNodeJs, FaWordpress } from "react-icons/fa";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import "./styles.scss";

export default function Tech() {
  const techOptions = [
    {
      title: "React",
      icon: <FaReact />,
      color: "blue",
    },
    {
      title: "Javascript",
      icon: <FaJs />,
      color: "fcba03",
    },
    {
      title: "Node js",
      icon: <FaNodeJs />,
      color: "109010",
    },
    {
      title: "Wordpress",
      icon: <FaWordpress />,
      color: "5353ec",
    },
    {
      title: "Figma",
      icon: <FaFigma />,
      color: "f33a6a",
    },
    {
      title: "HTML 5",
      icon: <FaHtml5 />,
      color: "ffa500",
    },
    {
      title: "CSS 3",
      icon: <FaCss3 />,
      color: "5353ec",
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
            <div key={idx} className={`tech-item tech-${x.color}`}>
              <span>{x?.title}</span>
              {x.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
