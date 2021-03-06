import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import cartReducer from '../features/cart/reducer'
import productsReducer from '../components/reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    form: formReducer
})
// cart key and cartReducer. Only have one reducer but combineReducers would allow for multiple into
// our rootReducer
const store = createStore(
rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// this second call gives us access to chrome redux dev tools redux 
)

export default store
// export store so we can use it in our provider 