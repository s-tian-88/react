import { 
    combineReducers, 
    compose, 
    legacy_createStore 
} from "redux";

import { numberReducer } from "./numberReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
    return legacy_createStore(
        // if one reducer stay there here
        // mainReduser
        combineReducers({
                number: numberReducer,
                // reducers ...
        }),
        compose(
            ReactReduxDevTools,
        )
    )
};

export { configureStore }
