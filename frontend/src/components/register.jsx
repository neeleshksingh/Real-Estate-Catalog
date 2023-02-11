import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './style/login.css'
import axios from "axios";

const Register = () =>{
  const navigate = useNavigate();
  const isloggedin= localStorage.getItem('userdetails')
  const [val, setVal] = useState({
    mailID: "",
    password: "",
    confirmpassword: "",
  });
  const [error,setError]=useState(false)
console.log(val)
  
const registers = async () => {
  let verify = val.password.length !== 0 && val.mailID.length !== 0 && val.confirmpassword.length !== 0;
  if (val.password === val.confirmpassword && verify) {
    setError(false);
    try {
      let data = await axios.post('http://localhost:3016/register', val);
      if (data.data.status === "signup failed") {
        alert(data.data.error);
      } else {
        localStorage.setItem('userdetails', JSON.stringify(data.data.userInfo));
        localStorage.setItem('token', JSON.stringify(data.data.token));
        setVal({
          userID: "",
          password: "",
          confirmpassword: ""
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Userid Exists")
    }
  } else {
    setError(true);
  }
};
    
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
                {error && <div className="err-1">*All fields are mandatory</div>}
          {val.password.length!==0 && val.password!== val.confirmpassword ?<div className="err-1">The password must be same</div>: null}
            </div>
            <div>
                <p><span id="sgnup" className="signup font" onClick={()=>{navigate('/')}}>Sign in</span></p>
            </div>
        </div>
    )
}
export default Register