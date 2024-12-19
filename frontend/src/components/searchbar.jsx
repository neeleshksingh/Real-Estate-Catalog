import { useEffect, useState } from 'react';
import { Environment } from '../environment/env';

export const Property = (props) => {
    const [status, setstatus] = useState("Sold");
    const [searchResult, setSeacrhResult] = useState(null)
    const statusHandler = async (id) => {
        status == "Sold" ? setstatus("UnSold") : setstatus("Sold")
        const url = Environment().API_URL
        await fetch(`${url}/get/updatstatus/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ status: status })
        }).then(
            data => { return data.json() }
        ).then(
            data => { setstatus(data.status) }
        )
    }

    const applyColor = (updateSelectionStyle) => {
        setSeacrhResult(updateSelectionStyle)
    }
    useEffect(() => {
        statusHandler()
    }, [])
    return (
        <div className="property">

        </div>
    )
}
