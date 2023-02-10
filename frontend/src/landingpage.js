import { useEffect, useState } from 'react'
import {Sidebar} from './sidebar'
import './components/style/landing.css'
import {Property} from'./property'
import {Navbar} from './navbar';
export const  Landing=()=>{
    const [basicInfo,setBasicInfo]=useState([]);
    // const [generalInfo,setGeneralInfo]=useState(null);
    // const [locationInfo,setLocationInfo]=useState(null);
    // const [propertyDetails,setPropertyDetails]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:3016/get/property').then((data)=>{
                return data.json()
        }).then((data)=>{
            setBasicInfo(data?.basicInfo)
            console.log(basicInfo)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    // console.log(`${basicInfo?.basicInfo?.[0]._id} `)
    return(
        <div>
        
            <div className='landing'>
                    <Sidebar/>
                    <div>
                        <Navbar/>
                        <hr className='hr'/>
                        <Property basicInfo={basicInfo} />
                    </div>
                    
            </div>

            
        </div>
        
    )
}