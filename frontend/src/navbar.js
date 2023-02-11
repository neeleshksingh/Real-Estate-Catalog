import './components/style/navbar.css'
import login from"./components/login";
import {useState,useContext} from 'react';
import {temp} from './components/login'
export const Navbar=()=>{
    const [user,setUserInfo]=useState()
    const data=useContext(temp)
    console.log(data)
    return(
        <div>
            <div className="nav">
                <div>
                    USER ID:{data.customId}
                </div>
                <div className="username">
                    <div>
                    <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                    </div>
                    <div>
                        User Name:{data.mailID}
                        <select>
                            <option></option>
                            <option>edit details</option>

                        </select>
                    </div>
                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}