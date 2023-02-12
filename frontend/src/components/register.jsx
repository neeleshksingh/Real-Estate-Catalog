import { json, useNavigate } from "react-router-dom";
import { useState} from "react";
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
  }
  return (
      <div id="Container">
          <div id='childcontainer'>

              <div id='formcontent' >
                  <h2 id='Logo'>Logo</h2>
                  <p id='create' style={{ color: 'blue' }}>Create New Account</p>
                  <input type={'Text'} placeholder='User ID' onChange={(e) => setVal({ ...val, mailID: e.target.value })}
              value={val.mailID}  ></input>
                  <input type={'password'} placeholder='Password' onChange={(e) => setVal({ ...val, password: e.target.value })}
              value={val.password} ></input>
                  <input type={'password'} placeholder='Conformpassword' required='true' onChange={(e) => setVal({ ...val, confirmpassword: e.target.value })}
              value={val.confirmpassword}></input>
                  <button onClick={registers}    > Sign up</button>
              </div>
          </div>
          <p id="dont" onClick={()=>{navigate('/')}}>Sign in</p>
      </div>
  )
}
export default Register