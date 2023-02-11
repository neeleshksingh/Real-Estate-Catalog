
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form";
import Login from "./components/login";
import Register from "./components/register"
import { Home } from "./home";
import { Landing } from "./landingpage";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
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
