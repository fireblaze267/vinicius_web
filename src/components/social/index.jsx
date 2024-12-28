import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./styles.scss";

export default function Social() {
  const social = [
    {
      icon: <FaLinkedin />,
      link: "",
    },
    {
      icon: <FaGithub />,
      link: "",
    },
    {
      icon: <FaMailBulk />,
      link: "",
    },
  ];

  return (
    <div className="social-main">
      <div className="social-content">
        <div className="social-img">
          <img />
        </div>
        <div className="social-links">
          {social.map((x, idx) => {
            return (
              <div key={idx} onClick={null} className="social-item">
                {x.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
