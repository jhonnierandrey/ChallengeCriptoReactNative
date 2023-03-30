import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CryptoReducer from './reducers/cryptoReducer';

const rootReducer = combineReducers({crypto: CryptoReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
