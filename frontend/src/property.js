import { useState } from 'react'
import './components/style/prperty.css';
import { SearchBar } from './components/searchbar';
export const Property=(props)=>{
    const [status,setstatus]=useState("Sold")
    const statusHandler=()=>{
        status=="Sold"?setstatus("UnSold"):setstatus("Sold")
    }
    return(
        <div className="property">
            <h1><SearchBar basicInfo={props.basicInfo}/></h1>
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
                                        
                                        <td><button onClick={statusHandler}>{status}</button></td>
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
