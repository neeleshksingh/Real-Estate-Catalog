import { useEffect, useState } from "react"

export const SearchBar=(props)=>{
    const [PPID,setPPID]=useState()
    const Search=()=>{
        let data=props.basicInfo
        data= data.forEach(data=>{return(data.PPDID==PPID)})
        console.log(props.basicInfo,)
    }
    useEffect(()=>{
        Search()
    },[])
    return(
        <div>
            <input onChange={(e)=>{setPPID(e.target.value)}} value={PPID}/>
            <button onClick={Search}>search</button>
        </div>
    )
}