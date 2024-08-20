import { PersonCircle, Shield, Terminal, X } from "react-bootstrap-icons";
import "./styles.scss";

export default function Resume() {
  return (
    <div className="resume-main">
      <div className="resume-header">
        <Shield />
        <div className="resume-header-tab">
          <div className="resume-header-tab-left">
            <Terminal />
            PowerShell
          </div>
          <div className="resume-header-tab-right">
            <X width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="resume-terminal">
        <div className="resume-terminal-user">
          <PersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-text">
          <label>
            Olá! Me chamo Vinicius, sou um desenvolvedor especializado em React
            e React Native, com sólida experiência na criação de aplicativos web
            e móveis. Com proficiência em JavaScript, HTML e CSS, sou capaz de
            construir interfaces modernas e responsivas, fornecendo aos usuários
            uma experiência intuitiva e agradável.
          </label>
        </div>

        <div className="resume-terminal-user">
          <PersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-text">
          <label>
            Ao longo dos anos, tenho trabalhado em diversos projetos, desde
            aplicativos corporativos até Paginas de divulgação. Minha paixão
            pela tecnologia e o constante aprendizado me impulsionam a
            acompanhar as tendências mais recentes no ecossistema React,
            garantindo que meus aplicativos sejam desenvolvidos com as melhores
            práticas e as últimas ferramentas disponíveis.
          </label>
        </div>

        <div className="resume-terminal-user">
          <PersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-command" contentEditable="true"></div>
      </div>
    </div>
  );
}
