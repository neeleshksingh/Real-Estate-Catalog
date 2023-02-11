import { useEffect, useState } from 'react'
export const StatusUpdate=(props)=>{
    const [id,setid]=useState(props.id)
    const [status,setStatus]=useState(props.status)
    
    function statusHandler(id){
        // status=="Sold"?setstatus("UnSold"):setstatus("Sold")
         fetch(`http://localhost:3016/get/updatestatus/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({status:status})
        }).then(
            data=>{return data.json()}
        ).then(
            data=>{setStatus(data.status)}
        )
    }
    useEffect(()=>{
        statusHandler()
    },[])
    return(
        <div className="property">
            {status}
        </div>
    )
}