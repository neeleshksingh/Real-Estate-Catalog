import './components/style/navbar.css'
import login from"./components/login";
import {useState,useContext} from 'react';
import {temp} from './components/conetxt'
import { Logout } from './components/logout';

export const Navbar=()=>{
    const {userinfo,setUserInfo}=useContext(temp)
    console.log(userinfo)
    return(
        <div>
            <div className="nav">
                <div>
                    USER ID:{userinfo.customId}
                </div>
                <div className="username">
                    <div>
                    <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                    </div>
                    <div>
                        User Name:{userinfo.mailID}
                        <select>
                            <option><Logout/></option>
                            <option></option>

                        </select>
                    </div>
                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}