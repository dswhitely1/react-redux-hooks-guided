import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer as weatherAlert} from './weather/weatherReducer';

const rootReducer = combineReducers({weatherAlert});

const middleware = [thunk];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, composeWithDevTools(enhancers));
