import { useEffect, useState } from 'react'
import {Sidebar} from './sidebar'
import './components/style/landing.css'
import {Property} from'./property'
export const  Landing=()=>{
    const [basicInfo,setBasicInfo]=useState();
    const [generalInfo,setGeneralInfo]=useState();
    const [locationInfo,setLocationInfo]=useState();
    const [propertyDetails,setPropertyDetails]=useState();
    useEffect(()=>{
        fetch('http://localhost:3016/get/property').then((data)=>{
                return data.json()
        }).then((data)=>{
            setBasicInfo(data?.basicInfo)
            setGeneralInfo(data?.generalInfo)
            setLocationInfo(data?.locationInfo)
            setPropertyDetails(data?.propertyDetails)

        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <div className='landing'> 
                <div>
                <Sidebar/>
            
                </div>
                <div>
                    <Property basicInfo={basicInfo} generalInfo={generalInfo} locationInfo={locationInfo} propertyDetails={propertyDetails}/>
                </div>


            </div>

            
        </div>
        
    )
}