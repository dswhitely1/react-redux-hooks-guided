import React from 'react';
import {Route} from 'react-router-dom'
import {ActionsProvider} from '../contexts/ActionsContext';
import {useWeatherActions} from '../store/weather/useWeatherActions';
import WeatherContainer from './weatherAlerts/WeatherContainer';

function App() {
    const actions = useWeatherActions();

    return (
        <ActionsProvider value={{actions}}>
            <Route exact path="/" component={WeatherContainer} />
        </ActionsProvider>
    )
}

export default App;