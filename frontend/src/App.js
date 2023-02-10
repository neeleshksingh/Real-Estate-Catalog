
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./components/basic";
import Property from "./components/property";
import { Landing } from "./landingpage";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<><Basic  inp1='random' /></>} />
          <Route path="/property" element={<Property/>} />
          <Route path="/landing" element={<Landing/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;