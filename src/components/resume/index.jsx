import { BsPersonCircle, BsShield, BsTerminal, BsX } from "react-icons/bs";
import "./styles.scss";

export default function Resume() {
  return (
    <div className="resume-main">
      <div className="resume-header">
        <BsShield />
        <div className="resume-header-tab">
          <div className="resume-header-tab-left">
            <BsTerminal />
            <span>PowerShell</span>
          </div>
          <div className="resume-header-tab-right">
            <BsX width={20} height={20} />
          </div>
        </div>
        <div className="resume-header-tab">
          <div className="resume-header-tab-left">
            <BsTerminal />
            <span>PowerShell</span>
          </div>
          <div className="resume-header-tab-right">
            <BsX width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="resume-terminal">
        <div className="resume-terminal-user">
          <BsPersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-text">
          <span>
            Olá! Me chamo Vinicius, sou desenvolvedor Fullstack com sólida
            experiência na criação de aplicações web e mobile completas — do
            front-end ao back-end. No front-end, trabalho principalmente com
            React e React Native, construindo interfaces modernas, responsivas e
            intuitivas. No back-end, utilizo Node.js para desenvolver APIs
            robustas e escaláveis, com bancos de dados MySQL e PostgreSQL para
            garantir armazenamento e consultas eficientes.
          </span>
        </div>

        <div className="resume-terminal-user">
          <BsPersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-text">
          <span>
            Ao longo dos anos, tenho trabalhado em diversos projetos, desde
            aplicativos corporativos até Paginas de divulgação. Minha paixão
            pela tecnologia e o constante aprendizado me impulsionam a
            acompanhar as tendências mais recentes no ecossistema React,
            garantindo que meus aplicativos sejam desenvolvidos com as melhores
            práticas e as últimas ferramentas disponíveis.
          </span>
        </div>

        <div className="resume-terminal-user">
          <BsPersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-text">
          <span>
            Além disso, tenho facilidade e disposição para aprender novas
            tecnologias sempre que um projeto exige. Não me limito a uma stack
            específica: encaro cada novo desafio como uma oportunidade de
            expandir meu conhecimento e entregar a melhor solução possível,
            independente da ferramenta ou linguagem envolvida.
          </span>
        </div>

        <div className="resume-terminal-user">
          <BsPersonCircle /> Vinicius on ˜
        </div>

        <div className="resume-terminal-command" contentEditable="true"></div>
      </div>
    </div>
  );
}
