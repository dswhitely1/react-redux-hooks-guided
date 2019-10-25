import {useCallback} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { FETCH_WEATHER_START, FETCH_WEATHER_FAILURE } from './weatherTypes';

export const useWeatherActions = () => {
    const dispatch=useDispatch();

    const fetchWeatherAlerts = useCallback(()=> {
        dispatch({type: FETCH_WEATHER_START});
        axios.get('').then(res => {
            console.log(res.data)
        }).catch(err => dispatch({type: FETCH_WEATHER_FAILURE, payload: err.response}))
    }, [dispatch])

    return {fetchWeatherAlerts}
}