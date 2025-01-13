import { FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./styles.scss";

export default function Social() {
  const social = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/vinicius-gama/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/fireblaze267",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:vinicius.gama25@hotmail.com",
    },
  ];

  return (
    <div className="social-main">
      <div className="social-content">
        <div className="social-text">
          <p>
            Estou sempre aberto a novos desafios e colaborações emocionantes. Se
            você está procurando um desenvolvedor React ou React Native para
            trazer sua ideia à vida, ficarei feliz em contribuir com minha
            expertise e habilidades técnicas.
          </p>
        </div>
        <div className="social-links">
          {social.map((x, idx) => {
            return (
              <a href={x.link}>
                <div
                  key={idx}
                  onClick={() => window.open(x.link)}
                  className="social-item"
                >
                  {x.icon}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
