import {Competences} from "./components/Competences"
import {PasantiasBootcamps} from "./components/Pasantias&Bootcamps"
import {Nav} from "./components/Nav"
import {Programas} from "./components/Programas"
import {AnalogMissions} from "./components/Analog_Missions"
//init app
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    
      <Router>
          <Nav/>
          <div>
            <Routes>
              <Route path="/" element={<Competences />} />
              <Route path="/pasantias-bootcamps" element= {<PasantiasBootcamps/>}/>
              <Route path="/programas" element= {<Programas/>}/>
              <Route path="/misiones-analogas" element= {<AnalogMissions/>}/>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
