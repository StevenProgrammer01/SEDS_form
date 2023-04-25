import {Competences} from "./components/Competences"
import {Pasantias_Bootcamps} from "./components/Pasantias&Bootcamps"
import {Nav} from "./components/Nav"
import {Programas} from "./components/Programas"
import {Analog_Missions} from "./components/Analog_Missions"
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
              <Route path="/pasantias-bootcamps" element= {<Pasantias_Bootcamps/>}/>
              <Route path="/programas" element= {<Programas/>}/>
              <Route path="/misiones-analogas" element= {<Analog_Missions/>}/>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
