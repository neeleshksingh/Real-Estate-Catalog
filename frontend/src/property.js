import { useState,useEffect} from 'react'
import './components/style/prperty.css';
import { SearchBar } from './components/searchbar';
import {Link} from 'react-router-dom'


export const Property=(props)=>{
    const [status,setstatus]=useState("Sold")
    const [searchResult,setSeacrhResult]=useState()
    
    const statusHandler=(id)=>{
        status=="Sold"?setstatus("UnSold"):setstatus("Sold")
         fetch(`http://localhost:3016/get/updatestatus/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({status:status})
        }).then(
            data=>{return data.json()}
        ).then(
            data=>{setstatus(data.status)}
        )
    }
    useEffect(()=>{
        statusHandler()
    },[])
    return(
        <div className="property">
            
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Days left</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        { props.basicInfo ? props.basicInfo.map((values,index)=>{
                                return(
                                      <tr key={index}>
                                        <td>{values.PPDID}</td>
                                        <td><img src="https://img.icons8.com/small/16/000000/image.png"/></td>
                                        <td>{values.propertyType}</td>
                                        <td>{values.mobile}</td>
                                        <td>{values.totalArea}</td>
                                        <td>{values.Views}</td>
                                        <td>{values._id}</td>
                                        
                                        <td><button onClick={statusHandler(values._id)}>{values.status}</button></td>
                                        <td>{Math.floor(Math.random()*100)}</td>
                                        <td><img src="https://img.icons8.com/small/16/000000/visible.png"/><img src="https://img.icons8.com/small/16/000000/pencil-tip.png"/></td>
                                      </tr>  
                                    )
                            })
                        :null}
                </tbody>
            </table>
        </div>
    )
}
