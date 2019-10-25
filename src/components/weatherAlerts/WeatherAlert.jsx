import React from 'react'

const WeatherAlert = ({alert: {properties: {event, description, severity, headline, areaDesc}}}) => {
   
    return (
        <div >
            <h1 className={severity === "Severe" ? 'red': severity ==="Moderate" ? 'blue' : null}>{headline}</h1>
            <h3>{areaDesc}</h3>
            <p>{event}</p>
            <p>{description}</p>
            <p>{severity}</p>
        </div>
    )
}

export default WeatherAlert
