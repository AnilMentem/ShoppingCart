import { combineReducers, applyMiddleware, createStore, compose  } from 'redux';
import  thunk  from 'redux-thunk';

import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';

const AppReducers = combineReducers({
    ProductReducer,
    CartReducer
});


const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;