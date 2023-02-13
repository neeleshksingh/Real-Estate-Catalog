import { useState, createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './style/login.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { temp } from "./context";

const Login = () =>{
    const [show, setShow] = useState("password")
    const {user,setUserInfo}=useContext(temp)
    const [data,setData]= useState({mailID:'', password:''})
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false);
    const handleLogin =  async()=>{
        setLoader(true);
        try{
        if(data.mailID && data.password)
     {
       let user=await axios.post('https://real-estate-catalog-gp8x.onrender.com/login',data)
       if (user.data.token)
       {
       localStorage.setItem("jwt", data.token)
       localStorage.setItem("user", JSON.stringify(user.data.user))
       console.log(user)
       setUserInfo(user.data.user)
       setData({mailID:'', password:''})
       setLoader(false);
       navigate('/landing')
       }
     }
     else
     {
        setLoader(false);
        setError('*All fields are madnatory')  
     }
    }catch (error) {
        setLoader(false);
        console.log(error)
        setError("*User not found");
     }

    }
    const handleReg = () =>{
        navigate("/register")
    }
    const handlepass = () =>{
        if(show == "text"){
            setShow("password")
        }
        else{
            setShow("text")
        }
    }
    if (loader) {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '15% 15% 15% 15%', }}>
                <img src={"https://cdn.dribbble.com/users/241526/screenshots/954930/loader.gif"} alt="loading-gif" width='30%' height='30%' />
            </div>
        )
    } 
    return(
        <temp.Provider value={data}>
        <div className="login">
            <div id="container">
                <div className="head flexing">
                    <h1 className="font h1">Logo</h1>
                    <p className="font p1">Enter your credentials to access your account</p>
                </div>
                <div className="inp-field flexing">
                    <input type="text" className="inp" placeholder="User ID" value={data.mailID} onChange={e=>setData({...data,mailID:e.target.value})} />
                    <input type={show} className="inp" placeholder="Password" value={data.password} onChange={e=>setData({...data,password:e.target.value})}/>
                  <span>{<VisibilityOffIcon className="eye" onClick={handlepass}/>}</span>
                </div>
                <div className="btn-field flexing">
                    <button id="signin" onClick={handleLogin}>Sign in</button>
                    <span className="signup font" onClick={handleReg}>Sign Up</span>
                    
                </div>
                { error && <div className="error">{error}</div> }
            </div>
            <div>
                <p className="font">Don’t have an account? <span className="signup font" onClick={handleReg}>Sign up</span></p>
            </div>
            
        </div>
        </temp.Provider>
    )
}
export default Login

