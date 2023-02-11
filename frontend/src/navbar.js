import './components/style/navbar.css'
import login from"./components/login";
import {useState,useContext} from 'react';
import {temp} from './components/conetxt'

export const Navbar=()=>{
    const {userinfo,setuserInfo}=useContext(temp)
    const [user,setuser]=useState()
    // setuser(userinfo)
    return(
        <div>
            <div className="nav">
                <div>
                    USER ID:
                </div>
                <div className="username">
                    <div>
                    <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                    </div>
                    <div>
                        User Name:
                        <select>
                            

                        </select>
                    </div>
                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}