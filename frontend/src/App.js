
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form";
import Login from "./components/login";
import Register from "./components/register"
import { Home } from "./home";
import { Landing } from "./landingpage";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { temp } from "./components/context";
import { useState } from "react";

function App() {
  const [userinfo,setUserInfo]=useState(null)
  return (
    <div className="App"> 
     <temp.Provider value={{userinfo,setUserInfo}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/landing/form" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </temp.Provider>
    </div>
  );
}

export default App;
