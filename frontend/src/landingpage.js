import { useEffect, useState } from 'react'
import { Sidebar } from './sidebar'
import './components/style/landing.css'
import { Property } from './property'
import { Navbar } from './navbar';
import {Link} from 'react-router-dom';

export const Landing = () => {
    const [basicInfo, setBasicInfo] = useState();
    const [PPID, setPPID] = useState()
    const [search,setSeacrhResult]=useState(null)
    const Search = async () => {
        let data = basicInfo
        data.forEach(data => { if (data.PPDID === PPID) setSeacrhResult([data]) })
        // console.log(search)
    }
  
    useEffect(() => {
        fetch('http://localhost:3016/get/property').then((data) => {
            return data.json()
        }).then((data) => {
            setBasicInfo(data?.basicInfo)
            // console.log(basicInfo)
        }).catch((err) => {
            console.log(err)
        });
        Search();
    }, [])
    return (
        <div>

            <div className='landing'>
                <Sidebar />

                <div>
                    <Navbar />
                    <hr className='hr' />
                    <header className='header'>
                        <div>
                            <input onChange={(e) => { setPPID(e.target.value) }} value={PPID} />
                            <button onClick={Search} >search</button>
                        </div>
                        <div>
                            <Link to="/property">

                                <button>Enter</button>

                            </Link>
                        </div>
                    </header>
                    {/* <Property basicInfo={basicInfo} /> */}
                    <Property basicInfo={search==null?basicInfo:search} />
                </div>

            </div>


        </div>

    )
}