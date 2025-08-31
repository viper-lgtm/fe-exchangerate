import axios from "axios";
import React, { useEffect, useState } from "react";

// const CS_URL = "/api"
// const CS_URL = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
const LOCAL_URL = "http://localhost:8080"

const ExchangeRatelist = () => {

    const [rates, setRates] = useState(null)

    useEffect(() => {
        const fetchRates = async () => {
            const response = await axios.get(`${LOCAL_URL}/api?usedb=false`)
            setRates(response.data)
            // const response = await fetch(CS_URL)
            // const data = await response.json()
            // setRates(data)
        }
        fetchRates()
    }, [])

    return (
        <div>
            <h1>Exchange rate list</h1>
            {rates ? (
                <pre>
                    <code>
                        {JSON.stringify(rates, null, 2)}
                    </code>
                </pre>
            ) : (
                <div>
                    Loading data...
                </div>
            )}
        </div>
    )
}

export default ExchangeRatelist