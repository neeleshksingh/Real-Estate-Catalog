
export const Property=(props)=>{
    return(
        <div>
            <h1>property</h1>
            <table>
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
                        { props.basicInfo.length!=0? props.basicInfo.map((values,index)=>{
                                return(
                                      <tr>
                                        <td>{values._id}</td>
                                        
                                        <td><img src="https://img.icons8.com/small/16/000000/image.png"/></td>
                                        <td>{values.propertyType}</td>
                                        <td>{values.negotabale}</td>
                                        <td>{values.price}</td>
                                        <td>{values.ownership}</td>
                                        <td><button>sold</button></td>
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
