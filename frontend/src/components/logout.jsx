import { useContext, useEffect, useState } from 'react';
import {temp} from './conetxt'
export const Logout=(props)=>{
    const {user,setuser}=useContext()
    const logout=()=>{
        setuser(null)
    }
    useEffect(()=>{
        logout()
    },[])
    return(
        <>
        <button onClick={logout}>Logout</button>
        </>
    )
}

