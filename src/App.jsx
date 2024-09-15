import "./app.scss";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Services from "./components/services";
import Tech from "./components/tech";

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <div className="app-wrapper">
        <Resume />
        <Services />
      </div>
      <Projects />
      <Tech />
    </div>
  );
}

export default App;
