import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form";
import Login from "./components/login";
import Register from "./components/register"

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;