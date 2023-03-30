import {GET_COIN_METRICS} from '../actions/cryptoActions';

const initialState = {
    savedCryptos: [],
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case GET_COIN_METRICS:
            return {
                ...state,
                savedCryptos: action.payload,
            }
        default:
            return state;
    }
};