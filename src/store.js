import { createStore, applyMiddleware, combineReducers } from 'redux';
// middleware; makes asynchronus calls
import thunk from 'redux-thunk';
import listings from './reducers/listings';
import listingFormData from './reducers/listingFormData';


// this.props.store.dispatch => passes object to reducers then updates our state from reducer function
const reducers = combineReducers({
    listings,
    listingFormData
});

const middleware = [thunk];

export default createStore(
    reducers,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_(),
    // middleware must came after devtools
    applyMiddleware(...middleware),
);
