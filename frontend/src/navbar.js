import './components/style/navbar.css'
import {useContext, useState} from "react"
import {temp} from './components/context'
import Logout from './components/logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navbar=()=>{
    const {userinfo,setUserInfo}=useContext(temp)
    console.log(userinfo)
    const [display, setDisplay] = useState(false)
    const handleLogout = () =>{
       setDisplay(!display)
    }
    return(
        <div>
            <div className="nav">
                <div>
                    USER ID: {userinfo.customId}
                </div>
                <div className="username">
                    <div>
                    <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                    </div>
                    <div>
                        User Name: {userinfo.mailID} <ArrowDropDownIcon sx={{fontSize:30}} onClick={handleLogout}/>
                        {display ? <Logout/>: null}
                    </div>
                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}