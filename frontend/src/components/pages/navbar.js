import '../style/navbar.css'
import { useState } from "react"
import Logout from '../auth/logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export const Navbar = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const [display, setDisplay] = useState(false);
    const handleLogout = () => {
        setDisplay(!display);
    }
    return (
        <div>
            <div className="nav">
                <div>
                    USER ID: {user?.customId}
                </div>
                <div className="username">
                    <div>
                        <PermIdentityIcon />
                    </div>
                    <div className='user-name'>
                        {user?.mailID} <ArrowDropDownIcon className='user-name' sx={{ fontSize: 30 }} onClick={handleLogout} />
                        {display ? <Logout /> : null}
                    </div>
                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}