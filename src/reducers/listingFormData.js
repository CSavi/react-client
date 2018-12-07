// reducers specify how the app's state changes in response to actions sent to the store
const initialState = {
    name: '',
    price: 0,
    img_url: '',
    street: '',
    city: '',
    state: '',
    postal_code: '',
    description: '',
    host: ''
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATED_DATA':
            return action.listingFormData

        case 'RESET_LISTING_FORM':
            return initialState;
             
        default:
            return state;
    }
}
