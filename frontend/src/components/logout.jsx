import { useNavigate } from "react-router-dom"
const Logout = () =>{
    const Navigate=useNavigate()
    const handlelog=()=>{
        localStorage.removeItem("jwt")
        localStorage.removeItem("user")
        Navigate('/')
    }
    return(
        <div onClick={handlelog}>
            Logout
        </div>
    )
}
export default Logout