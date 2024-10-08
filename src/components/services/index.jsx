import {
  CodeSquare,
  GearFill,
  WindowFullscreen,
  Wordpress,
} from "react-bootstrap-icons";
import "./styles.scss";

export default function Services() {
  return (
    <div className="services-main">
      <div className="services-title">
        <GearFill />
        <h1>Meus Serviços</h1>
      </div>

      <div className="services-content">
        <div className="services-cards">
          <div className="services-cards-title">
            <CodeSquare />
            <span>Desenvolvimento de sites</span>
          </div>
          <div className="services-cards-text">
            <p>
              Crie um site sob medida para suas necessidades, com design
              profissional e alta performance.
            </p>
          </div>
        </div>

        <div className="services-cards">
          <div className="services-cards-title">
            <WindowFullscreen />
            <span>Prototipação</span>
          </div>
          <div className="services-cards-text">
            <p>
              Visualize seu projeto antes de começar a construir, com protótipos
              interativos e fiéis à ideia final.
            </p>
          </div>
        </div>

        <div className="services-cards">
          <div className="services-cards-title">
            <Wordpress />
            <span>Wordpress</span>
          </div>
          <div className="services-cards-text">
            <p>
              Domine o CMS mais popular do mundo e tenha um site fácil de
              gerenciar e atualizar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
