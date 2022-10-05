import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";
import PropertyPage from "./components/PropertyPage";
import Services from "./components/Services";
import Work from "./components/Work";
import Accordion from "./components/Accordion";
import CounterPage from "./components/CounterPage";
import AgentPage from "./components/AgentPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PropertyPage />
      <Services/>
      <Work/>
      <Accordion/>
      <CounterPage/>
      <AgentPage/>
    </div>
  );
}

export default App;
