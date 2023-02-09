import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './style/login.css'
import axios from "axios";

const Register = () =>{
    const navigate = useNavigate();
    /*
    const register = async()=>{

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(email!==""){
            if(!emailRegex.test(email)){
                alert("Invalid Email");
                return
               }  
        } 

        if(password.length<7 && password.length>=14){
            
                alert("password must be between 7 to 14 characters/ numbers.")
                return
            
        }         
             
       await fetch("http://localhost:3016/register",{
            method:"post",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify({
                mailID:email,
                password:password,
                confirmpassword:confpassword
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
                
            }
            if(data.message){
                alert(data.message)
                navigate('/')
            }
            console.log(data)})
        .catch(e=>console.log(e))
        
    }*/

    const isloggedin= localStorage.getItem('userdetails')
  const [val, setVal] = useState({
    mailID: "",
    password: "",
    confirmpassword: "",
  });
  const [error,setError]=useState(false)
useEffect(()=>{
  if(isloggedin)
  {
    navigate('/')
  }
})
console.log(val)
  
  const registers=async()=>{
    let verify = val.password.length!=0 && val.mailID.length!=0 && val.confirmpassword.length!=0
    if(val.password == val.confirmpassword && verify)
    {
    setError(false)
    let data=await axios.post('http://localhost:3016/register', val)
    // localStorage.setItem('userdetails',JSON.stringify(data.data.userInfo))
    // localStorage.setItem('token',JSON.stringify(data.data.token))
    setVal({
        userID: "",
        password: "",
        confirmpassword: ""
      })
      navigate("/")
    }
    else{
        setError(true)
    }
  }
    
    return(
        <div className="login">
            <div id="container">
                <div className="head flexing">
                    <h1 className="font h1">Logo</h1>
                    <p className="font p1">Create New Account</p>
                </div>
                <div className="inp-field flexing">
                    <input type="text" className="inp" placeholder="Mail ID" onChange={(e) => setVal({ ...val, mailID: e.target.value })}
              value={val.mailID}/>
                    <input type="text" className="inp" placeholder="Password" onChange={(e) => setVal({ ...val, password: e.target.value })}
              value={val.password}/>
                    <input type="text" className="inp" placeholder="Confirm Password" onChange={(e) => setVal({ ...val, confirmpassword: e.target.value })}
              value={val.confirmpassword}/>
                </div>
                <div className="btn-field flexing">
                    <button id="signin" onClick={registers}>Sign up</button>
                </div>
                {error && <div>All fields are mandatory</div>}
          {val.password.length!==0 && val.password!== val.confirmpassword ?<div>The password must be same</div>: null}
            </div>
            <div>
                <p><span id="sgnup" className="signup font" onClick={()=>{navigate('/')}}>Sign in</span></p>
            </div>
        </div>
    )
}
export default Register