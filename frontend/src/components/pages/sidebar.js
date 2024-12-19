import '../style/sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import logo from '../../assets/image/logo.png'

export const Sidebar = () => {
    return (
        <div className='main-sidebar'>
            <div className='logo-side'>
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className='logo-icon'>
                <div className='side-flex' id='prop-icon'>
                    <HomeIcon className='side-icon'/>
                    <p>Property</p>
                </div>
                <div className='side-flex'>
                    <NotificationsIcon className='side-icon'/>
                    <p>Assistance</p>
                </div>
                <div className='side-flex'>
                    <PlayForWorkIcon className='side-icon'/>
                    <p>Recieved Interest</p>
                </div>
                <div className='side-flex-img'>
                    <img id='side-img' src={require('../../assets/img/path.png')} alt=""/>
                    <p>Sent Interest</p>
                </div>
                <div className='side-flex'>
                    <VisibilityIcon className='side-icon'/>
                    <p>Property Views</p>
                </div>
                <div className='side-flex'>
                    <LocalOfferIcon className='side-icon'/>
                    <p>Traffic Plan</p>
                </div>
            </div>
        </div>
    )
}