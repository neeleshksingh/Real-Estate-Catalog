import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style/register.css'
import axios from "axios"
const Login = () =>{

    let Navigate = useNavigate();
    let handler = () => {
        Navigate("/register")
    }
   /*
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");

    async function fetchdata() {

        const responce = await fetch("http://localhost:3016/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                userid, password
            })

        })
        var data = await responce.json();
        if (data.che === "invalid") {
            alert("enter valid details")
        }

    }*/
    const [data,setData]= useState({mailID:'', password:''})
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
       navigate('/form')
       }
     }
     else
     {
       alert('*All fields are madnatory')
     }
    }catch (error) {
        alert(error.response.data.message);
     }

    }
    return (<>
        <nav>
            <div id="Container">
                <div id='childcontainer'>
                    <div id='formcontent' >
                        <h2 id='Logo'>Logo</h2>
                        <p id='create' style={{ color: 'blue' }}>Enter your credentials to access your account</p>
                        <input type={'Text'} placeholder='User ID' value={data.mailID} onChange={e=>setData({...data,mailID:e.target.value})} ></input>
                        <input type={'password'} placeholder='Password' value={data.password} onChange={e=>setData({...data,password:e.target.value})}></input>
                        <button onClick={handleLogin} >   Sign In   </button>
                        <p id="signeup" onClick={ handler}>Sign Up</p>
                    </div>
 
                </div>
                <p id="c"> <span id="dont" >Don't have an account?  </span> <span id="dontp" onClick={ handler}> signeup </span> </p>
            </div>
        </nav>
    </>)
}
export default Login

