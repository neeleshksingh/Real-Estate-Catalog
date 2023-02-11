
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login'
import Basic from "./components/basic";
import Property from "./components/property";
import { Landing } from "./landingpage";
import Form from'./components/form';
import Register from "./components/register"
import { Home } from "./home";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login/>} />
          <Route path="/property" element={<Form/>} />
          <Route path="/landing" element={<Landing/>}/>

          
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/form" element={<><Sidebar/><Navbar/><Form/></>}/>
          <Route path="/landing" element={<Landing/>}/>  
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
