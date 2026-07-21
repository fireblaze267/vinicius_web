import { BsCaretRightFill } from "react-icons/bs";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaJoomla,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaWordpress,
} from "react-icons/fa";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWindows,
} from "react-icons/fa6";
import { SiMysql, SiSpringboot } from "react-icons/si";
import "./styles.scss";

export default function Tech() {
  const techOptions = [
    {
      divTitle: "Frontend",
      values: [
        {
          title: "React",
          icon: <FaReact />,
        },
        {
          title: "React Native",
          icon: <FaReact />,
        },
        {
          title: "Javascript",
          icon: <FaJs />,
        },
        {
          title: "HTML 5",
          icon: <FaHtml5 />,
        },
        {
          title: "CSS 3",
          icon: <FaCss3 />,
        },
        {
          title: "Figma",
          icon: <FaFigma />,
        },
      ],
    },
    {
      divTitle: "Backend",
      values: [
        {
          title: "Node js",
          icon: <FaNodeJs />,
        },
        {
          title: "Springboot",
          icon: <SiSpringboot />,
        },
      ],
    },
    {
      divTitle: "Database",
      values: [
        { title: "Mysql", icon: <SiMysql /> },
        { title: "Postgress", icon: <DiPostgresql /> },
        { title: "MongoDB", icon: <DiMongodb /> },
      ],
    },
    {
      divTitle: "Cloud",
      values: [
        {
          title: "AWS",
          icon: <FaAws />,
        },
      ],
    },
    {
      divTitle: "Diversos",
      values: [
        {
          title: "Python",
          icon: <FaPython />,
        },
        {
          title: "Wordpress",
          icon: <FaWordpress />,
        },
        {
          title: "Joomla",
          icon: <FaJoomla />,
        },
        {
          title: "Windows",
          icon: <FaWindows />,
        },
        {
          title: "Linux",
          icon: <FaLinux />,
        },
      ],
    },
  ];

  return (
    <div className="tech-main">
      <div className="tech-desc">
        <div className="tech-desc-title">
          <h1>Habilidades</h1>
        </div>
        <div className="tech-desc-soft">
          <h1>Soft skills</h1>
          <h3>Resolução</h3>
          <p>
            <BsCaretRightFill /> Foco em identificar a raiz dos problemas e
            propor soluções eficientes, transformando desafios técnicos em
            resultados práticos.
          </p>
          <h3>Adaptabilidade</h3>
          <p>
            <BsCaretRightFill /> Facilidade para me ajustar a diferentes
            contextos, equipes e tecnologias, mantendo a produtividade mesmo
            diante de mudanças constantes.
          </p>
          <h3>Autodidatismo</h3>
          <p>
            <BsCaretRightFill /> Busca constante por conhecimento por conta
            própria, acompanhando novidades do mercado e aprendendo novas
            tecnologias sem depender de supervisão.
          </p>
        </div>
      </div>
      <div className="tech-container">
        {techOptions.map((x, idx) => {
          return (
            <div key={idx} className="tech-container-stack">
              <h1>{x?.divTitle}</h1>
              <div className="tech-item-container">
                {x?.values.map((v) => {
                  return (
                    <div key={idx + v?.title} className="tech-item">
                      <span>{v?.title}</span>
                      {v?.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
