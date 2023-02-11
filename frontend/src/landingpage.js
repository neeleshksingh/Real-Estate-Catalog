import { useEffect, useState } from 'react'
import { Sidebar } from './sidebar'
import './components/style/landing.css'
import { Home } from './home'
import { Navbar } from './navbar';
import {Link, useNavigate} from 'react-router-dom';

export const Landing = () => {
    const [basicInfo, setBasicInfo] = useState();
    const [PPID, setPPID] = useState()
    const [search,setSeacrhResult]=useState(null)
    const Search = async () => {
        let data = basicInfo
        data.forEach(data => { if (data._id === PPID) setSeacrhResult([data]) })
        // console.log(search)
    }
    const fetchData=()=>{
        fetch('http://localhost:3016/get/property').then((data) => {
          return data.json()
      }).then((data) => {
          setBasicInfo(data?.basicInfo)
          // console.log(basicInfo)
      }).catch((err) => {
          console.log(err)
      });
      }
    useEffect(() => {
        
        fetchData();
        Search();
    }, [])
    return (
        <div>

            <div className='landing'>
                <Sidebar />

                <div>
                    <Navbar />
                    
                    <header className='header'>
                    <div class="search-container">


                            <input className="inp-ser" onChange={(e) => { setPPID(e.target.value) }} value={PPID} type="text" placeholder="Search PPD ID" name="search" />
                            <button className="ser-btn" onClick={Search} type="submit"><i class="fa fa-search"></i></button>
                    </div>
                        <div>
                            <Link to="/form">
                                <button className="add-prop">+ Add Property</button>
                            </Link>
                        </div>
                    </header>
                    {/* <Property basicInfo={basicInfo} /> */}

                    <Home basicInfo={search==null?basicInfo:search} fetchData={fetchData}/>
                </div>

            </div>


        </div>

    )
}