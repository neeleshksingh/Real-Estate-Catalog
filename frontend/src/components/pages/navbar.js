import '../style/navbar.css'
import { useContext, useState } from "react"
import { temp } from '../context'
import Logout from '../auth/logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export const Navbar = () => {
    const { userinfo, setUserInfo } = useContext(temp);
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