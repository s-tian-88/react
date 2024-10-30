import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose,} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { skillsReducer } from '../reducers'
import rootSaga from '../sagas';

const rootReducer = combineReducers({
    skills: skillsReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export {
    store,
}
