import { useState, useEffect } from 'react'
import '../style/prperty.css';
import { Environment } from '../../environment/env'


export const Home = (props) => {
    const [idStatus, setidStatus] = useState({ id: '', status: '' })
    useEffect(() => {
        function statusHandler(id) {
            const url = Environment().API_URL
            fetch(`${url}/get/updatestatus/${idStatus.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ status: idStatus.status })
            }).then(
                data => data.json()
            ).then(
                data => { console.log(data.status) }
            ).catch(err => { console.log(err) })
        }
        statusHandler()
        props.fetchData()
        return (() => {
            setidStatus({ id: '', status: '' })
        })
    }, [idStatus.id, idStatus.status])

    return (
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
                    {props.basicInfo ? props.basicInfo.map((values, index) => {
                        return (
                            <tr key={index}>
                                <td>{values._id}</td>
                                <td><img src="https://img.icons8.com/small/16/000000/image.png" /></td>
                                <td>{values.propertyType}</td>
                                <td>{values.mobile}</td>
                                <td>{values.area}</td>
                                <td>{values.views}</td>
                                <td>
                                    <button
                                        className={`status ${values.status === "unsold" ? "green" : "red"}`}
                                        onClick={() => {
                                            setidStatus({ id: values._id, status: values.status });
                                        }}
                                    >
                                        {values.status}
                                    </button>
                                </td>
                                <td>{values.status === 'unsold' ? Math.floor(Math.random() * 100) : "00"}</td>
                                <td><img src="https://img.icons8.com/small/16/000000/visible.png" /><img src="https://img.icons8.com/small/16/000000/pencil-tip.png" /></td>
                            </tr>
                        )
                    })
                        : null}
                </tbody>
            </table>
        </div>
    )
}
