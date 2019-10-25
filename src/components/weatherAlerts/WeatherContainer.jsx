import React, {useEffect, useContext} from 'react'
import {useSelector} from 'react-redux'
import { ActionsContext } from '../../contexts/ActionsContext'
import WeatherAlert from './WeatherAlert';
import './weather.css';

const WeatherContainer = () => {
    const {actions: {fetchWeatherAlerts}} = useContext(ActionsContext);
    const {isLoading, errors }= useSelector(state => state.weatherAlert);
    const alerts = useSelector(state => state.weatherAlert.alerts);
    useEffect(()=>{
        fetchWeatherAlerts();
    }, [fetchWeatherAlerts])

    
    console.log(alerts);
    return (
        <div>
            {alerts.map(({id, ...alert}) => <WeatherAlert key={id} alert={alert} />)}
        </div>
    )
}

export default WeatherContainer
