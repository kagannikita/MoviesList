import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer';
import favouritesReducer from './favouritesReducer';
const reducers = combineReducers({//обьединение редусеров
    movies: moviesReducer,
    favourites: favouritesReducer
});

export default reducers;
