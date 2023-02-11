
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
import { temp } from "./components/conetxt";
import {useState} from 'react'
function App() {
  const [userinfo,setUserInfo]=useState(null)
  return (
    <div className="App"> 
    <temp.Provider value={{userinfo,setUserInfo}}>
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
      </temp.Provider>
    </div>
  );
}

export default App;
