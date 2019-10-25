import {useCallback} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { FETCH_WEATHER_START, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS } from './weatherTypes';

export const useWeatherActions = () => {
    const dispatch=useDispatch();

    const fetchWeatherAlerts = useCallback(()=> {
        dispatch({type: FETCH_WEATHER_START});
        axios.get('https://api.weather.gov/alerts').then(res => {
            dispatch({type: FETCH_WEATHER_SUCCESS, payload: res.data.features})
        }).catch(err => dispatch({type: FETCH_WEATHER_FAILURE, payload: err.response}))
    }, [dispatch])

    return {fetchWeatherAlerts}
}