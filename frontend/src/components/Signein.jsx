import React from "react";
import "./Style1.css"
import {useNavigate} from 'react-router-dom'
// import Signeup from "./Signeup";


let Signein = ()=>{

    let Navigate = useNavigate();
    let handler = ()=>{
        Navigate("/signeup")
    }
    return(<>
    <nav>
        <div id="Container">
            <div id='childcontainer'>
                <div id='formcontent' >
                    <h4 id='Logo'>Logo</h4>
                    <p  id='create'  style={{ color: 'blue' }}>Enter your credentials to access your account</p>
                    <input type={'Text'} placeholder='User ID' required="true"   ></input>
                    <input  type={'password'} placeholder='Password' required='true'></input>
                    <button> Sign In
                    </button>
                    <p id="signeup" onClick={handler}>Sign Up</p>
                </div>
                <p id="dont"> Don't have an account? <p > signeup </p> </p>
            </div>
        </div>
        </nav>
    </>)
}

export default Signein;