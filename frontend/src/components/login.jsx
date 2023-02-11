import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style/login.css'
import { createContext } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Navbar } from "../navbar";
import axios from "axios";
export const temp=createContext()
const Login = () =>{
    const [data,setData]= useState({mailID:'', password:''})
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleLogin =  async()=>{
        try{
        if(data.mailID && data.password)
     {
       let user=await axios.post('http://localhost:3016/login',data)
       if (user.data.token)
       {
       localStorage.setItem("jwt", data.token)
       localStorage.setItem("user", JSON.stringify(user.data.user))
       console.log(user)
       setData({mailID:'', password:''})
       navigate('/landing')
       }
     }
     else
     {
        setError('*All fields are madnatory')
     }
    }catch (error) {
        console.log(error)
        setError(error.response.data.message);
     }

    }
    const handleReg = () =>{
        navigate("/landing")
    }
   
    
    return(
        <div className="login">
            <div id="container">
                <div className="head flexing">
                    <h1 className="font h1">Logo</h1>
                    <p className="font p1">Enter your credentials to access your account</p>
                </div>
                <div className="inp-field flexing">
                    <input type="text" className="inp" placeholder="User ID" value={data.mailID} onChange={e=>setData({...data,mailID:e.target.value})} />
                    <input type="password" className="inp" placeholder="Password" value={data.password} onChange={e=>setData({...data,password:e.target.value})}/>
                  <span>{<VisibilityOffIcon className="eye"/>}</span>
                </div>
                <div className="btn-field flexing">
                    <button id="signin" onClick={handleLogin}>Sign in</button>
                    <span className="signup font" onClick={handleReg}>Sign Up</span>
                    
                </div>
                { error && <div className="error">{error}</div> }
            </div>
            <temp.Provider value={data}><Navbar data={data}/></temp.Provider>
            <div>
                <p className="font">Don’t have an account? <span className="signup font" onClick={handleReg}>Sign up</span></p>
            </div>
        </div>

    )
}
export default Login

