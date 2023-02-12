import { json, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, } from "react";
import './style/login.css'
import axios from "axios";
import { margin } from "@mui/system";


const Register = () => {

  const navigate = useNavigate();
  const isloggedin = localStorage.getItem('userdetails')
  const [val, setVal] = useState({
    mailID: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState(false)
  const [loader, setLoader] = useState(false);
  console.log(val)

  const registers = async () => {
    let verify = val.password.length !== 0 && val.mailID.length !== 0 && val.confirmpassword.length !== 0;
    if (val.password === val.confirmpassword && verify) {
      setError(false);
      setLoader(true);
      try {
        setLoader(true);
        let data = await axios.post('https://real-estate-catalog-gp8x.onrender.com/register', val);
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
          setLoader(false);
          navigate("/");

        }
      } catch (error) {
        console.error(error);
        setLoader(false);
        alert("Userid Exists")
      }
    } else {
      setLoader(false);
      setError(true);
    }

  };
  if (loader) {
    return (
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',margin:'15% 15% 15% 15%',}}>
          <img src={ "https://cdn.dribbble.com/users/241526/screenshots/954930/loader.gif" } alt="loading-gif" width='30%' height='30%' />
      </div>
  )
  } else {
    return (
      <div className="login">
        <div id="container">
          <div className="head flexing">
            <h1 className="font h1">Logo</h1>
            <p className="font p1">Create New Account</p>
          </div>
          <div className="inp-field flexing">
            <input type="text" className="inp" placeholder="Mail ID" onChange={(e) => setVal({ ...val, mailID: e.target.value })}
              value={val.mailID} />
            <input type="text" className="inp" placeholder="Password" onChange={(e) => setVal({ ...val, password: e.target.value })}
              value={val.password} />
            <input type="text" className="inp" placeholder="Confirm Password" onChange={(e) => setVal({ ...val, confirmpassword: e.target.value })}
              value={val.confirmpassword} />
          </div>
          <div className="btn-field flexing">
            <button id="signin" onClick={registers}>Sign up</button>
          </div>
          {error && <div className="err-1">*All fields are mandatory</div>}
          {val.password.length !== 0 && val.password !== val.confirmpassword ? <div className="err-1">The password must be same</div> : null}
        </div>
        <div>
          <p><span id="sgnup" className="signup font" onClick={() => { navigate('/') }}>Sign in</span></p>
        </div>

      </div>
    )
  }
}
export default Register