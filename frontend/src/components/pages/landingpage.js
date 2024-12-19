import { useEffect, useState } from 'react'
import { Sidebar } from './sidebar'
import '../style/landing.css'
import { Home } from './home'
import { Navbar } from './navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Environment } from '../../environment/env';
import Form from '../forms/form';

export const Landing = () => {
    const [basicInfo, setBasicInfo] = useState();
    const [PPID, setPPID] = useState()
    const [search, setSeacrhResult] = useState(null);

    const nav = useNavigate();

    const Search = async () => {
        let data = basicInfo;
        data?.forEach(data => { if (data._id === PPID?.toUpperCase()) setSeacrhResult([data]) });
    }
    const fetchData = () => {
        let userid = JSON.parse(localStorage.getItem("user"))._id;
        const url = Environment().API_URL;
        fetch(`${url}/get/property/${userid}`).then((data) => {
            return data.json()
        }).then((data) => {
            setBasicInfo(data?.basicInfo);
        }).catch((err) => {
        });
    }
    useEffect(() => {
        fetchData();
        Search();
    }, []);

    const addProperty = () => {
        nav('/landing/form');
    }
    const goBack = () => {
        nav('/landing');
    }

    const currentPath = window.location.pathname;

    return (
        <div className='landing'>
            <section className='sidebar-section'>
                <Sidebar />
            </section>
            <section className='main-section'>
                <div className='navbar-div'>
                    <Navbar />
                </div>
                <div className='home-div'>
                    <header className='header'>
                        <div className="search-container">
                            <input className="inp-ser" onChange={(e) => { setPPID(e.target.value) }} value={PPID} type="text" placeholder="Search PPD ID" name="search" />
                            <button className="ser-btn" onClick={Search} type="submit"><i className="fa fa-search"></i></button>
                        </div>
                        <div>
                            {currentPath === '/landing' ? (
                                <button className="add-prop" onClick={addProperty}>+ Add Property</button>
                            ) : currentPath === '/landing/form' ? (
                                <button className="add-prop" onClick={goBack}>Go Back</button>
                            ) : null}

                        </div>
                    </header>
                    {currentPath === '/landing' ? (
                        <Home basicInfo={search == null ? basicInfo : search} fetchData={fetchData} />
                    ) : currentPath === '/landing/form' ? (
                        <Form />
                    ) : null}
                </div>
            </section>
        </div>
    )
}