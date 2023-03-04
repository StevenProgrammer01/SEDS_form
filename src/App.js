import {Competences} from "./components/Competences"
import {Becas} from "./components/Becas"
import {Nav} from "./components/Nav"
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
              <Route path="/becas" element= {<Becas/>}/>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
