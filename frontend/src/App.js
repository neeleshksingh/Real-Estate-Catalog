
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./components/basic";
import Property from "./components/property";
import { Landing } from "./landingpage";
import Form from'./components/form';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<><Basic  inp1='random' /></>} />
          <Route path="/property" element={<Form/>} />
          <Route path="/landing" element={<Landing/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;