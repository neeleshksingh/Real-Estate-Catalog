import { useEffect, useState } from 'react'
export const Property=(props)=>{
    const [status,setstatus]=useState("Sold");
    const [searchResult,setSeacrhResult]=useState(null)
    const statusHandler=async(id)=>{
        status=="Sold"?setstatus("UnSold"):setstatus("Sold")
        await fetch(`http://localhost:3016/get/updatstatus/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({status:status})
        }).then(
            data=>{return data.json()}
        ).then(
            data=>{setstatus(data.status)}
        )
    }
    
    const applyColor = (updateSelectionStyle) => {
        setSeacrhResult(updateSelectionStyle)
      }
      useEffect(()=>{
        statusHandler()
      },[])
    return(
        <div className="property">
            
        </div>
    )
}
