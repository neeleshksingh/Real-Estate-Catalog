
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { temp } from "./components/context";
import { useState } from "react";
import Login from "./components/auth/login";
import Register from './components/auth/register';
import { Landing } from "./components/pages/landingpage";
import { Home } from "./components/pages/home";

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