import formVisibleReducer from './form-visible-reducer';
import beerListReducer from './beer-list-reducer';
import { combineReducers } from 'redux';
import * as c from './../actions/ActionTypes';



const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    masterBeerList: beerListReducer
});

export default rootReducer;