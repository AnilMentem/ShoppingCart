import * as Actions from '../Actions/ActionTypes';

const initialState = {
    loading: true,
    products: []
};

 const ProductReducer = (state = initialState,action) => {
    switch (action.type){
        case Actions.FETCH_PRODUCTS:
            return {
                ...state,
                products : action.payload,
                loading : false
            }
        default:
            return state;
    }
}

export default ProductReducer;