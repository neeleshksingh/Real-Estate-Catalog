import React from 'react';
import './Style.css'
let Signeup = () => {
    return (
        <div id="Container">
            <div id='childcontainer'>
                <div id='formcontent' >
                    <h4 id='Logo'>Logo</h4>
                    <p  id='create'  style={{ color: 'blue' }}>Create New Account</p>
                    <input type={'Text'} placeholder='User ID' required="true"   ></input>
                    <input  type={'password'} placeholder='Password' required='true'></input>
                    <input  type={'password'} placeholder='Conformpassword' required='true'></input>
                    <button> Sign up
                    </button>
                </div>
                <p id="dont">Signe in</p>
            </div>
        </div>
    )
}
export default Signeup;