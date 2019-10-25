import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './weatherTypes';

const initialState = {
    isLoading: false,
    errors: null,
    weatherAlerts: []
}

export function reducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_START:
            return {...state, isLoading: true, errors: null, weatherAlerts:[]}
            case FETCH_WEATHER_SUCCESS:
                return {...state, isLoading: false, errors: null, weatherAlerts: action.payload}
                case FETCH_WEATHER_FAILURE:
                    return {...state, isLoading: false, errors: action.payload, weatherAlerts:[]}
        default:
            return state;
    }
}