
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login'
import Basic from "./components/basic";
import Property from "./components/property";
import { Landing } from "./landingpage";
import Form from'./components/form';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login/>} />
          <Route path="/property" element={<Form/>} />
          <Route path="/landing" element={<Landing/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;