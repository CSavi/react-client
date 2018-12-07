import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
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
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
