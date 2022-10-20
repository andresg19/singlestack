import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../Reducer/index';
import thunk from 'redux-thunk';

const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSIONS_COMPOOSE_ || compose

const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk))
);

export default store;
