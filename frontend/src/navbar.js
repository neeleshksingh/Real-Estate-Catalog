import './components/style/navbar.css'
export const Navbar=()=>{
    return(
        <div>
            <div className="nav">
                <div>
                    USER ID:
                </div>
                <div className="username">
                    <div>
                    <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                    </div>
                    <div>
                        User Name:
                        <select>
                            <option></option>
                            <option>edit details</option>

                        </select>
                    </div>
                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}