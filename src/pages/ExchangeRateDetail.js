import axios from "axios";
import React, { useEffect, useState } from "react";

// const CS_URL = "/api"
// const CS_URL = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
const LOCAL_URL = "http://localhost:8080"



const ExchangeRateDetail = () => {

    const [rates, setRates] = useState(null)
    const [detailedRate, setDetailedRate] = useState(null)

    useEffect(() => {
        const fetchRates = async () => {
            const response = await axios.get(`${LOCAL_URL}/api?usedb=true`)
            setRates(response.data)
            // const response = await fetch(CS_URL)
            // const data = await response.json()
            // setRates(data)
        }
        fetchRates()
    }, [])

    const getDetailedRate = (rate) => {
        setDetailedRate(rate)
    }

    if (!rates) return <div>Loading data...</div>


    if (detailedRate) {
        return (
            <div style={{ marginLeft: "10px"}}>
                <h1>Detailed rate: {detailedRate.shortName}</h1>
                <p><strong>shortName:</strong> {detailedRate.shortName}</p>
                <p><strong>validFrom:</strong> {detailedRate.validFrom}</p>
                <p><strong>name:</strong> {detailedRate.name}</p>
                <p><strong>country:</strong> {detailedRate.country}</p>
                <p><strong>move:</strong> {detailedRate.move}</p>
                <p><strong>amount:</strong> {detailedRate.amount}</p>
                <p><strong>valBuy:</strong> {detailedRate.valBuy}</p>
                <p><strong>valSell:</strong> {detailedRate.valSell}</p>
                <p><strong>valMid:</strong> {detailedRate.valMid}</p>
                <p><strong>currBuy:</strong> {detailedRate.currBuy}</p>
                <p><strong>currSell:</strong> {detailedRate.currSell}</p>
                <p><strong>currMid:</strong> {detailedRate.currMid}</p>
                <p><strong>version:</strong> {detailedRate.version}</p>
                <p><strong>cnbMid:</strong> {detailedRate.cnbMid}</p>
                <p><strong>ecbMid:</strong> {detailedRate.ecbMid}</p>
            </div>
        )
    }


    return (
        <div>
            <h1>Exchange rate detailed info</h1>
            <ul style={{listStyleType: "none", marginLeft: "10px"}}>
                {rates.map(rate => (
                    <li
                        key={rate.shortName}
                        onClick={() => getDetailedRate(rate)}
                        style={{ cursor: "pointer", textDecoration: "underline", padding: "2px" }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "gray"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}
                    >
                        {rate.shortName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExchangeRateDetail