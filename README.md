# Redux
> Предскозуемый контейнер состояния для JavaScript приложений,
    библиотека, позволяющая организовать управление состоянием

```bash
npm install redux
npm install react-redux
```

**Redux**
- view
    > визуальная часть, дерево компонентов в *React*\
    > Отображает данные, хранящиеся в *Store*\
    > Только отображает, но не изменяет
- Action
    > JS-обьект, который содержит необходимые данные для\
    > обновления состояния, хранящегося в *Store*\
    > {type: 'action type', payload?: 'payload data'}
- Store
    > обьект, который хранит данные приложения.\
    > Реагирует на *Action* и при необзодимости\
    > изменяет свое состояние - данные внустри *State*\
    
    ключевые методы *Store*:
    - `dispatsh` - возможность отправить *Action* в *Store*
    - `subscribe` - возможность подаисаться на обновления состояния в *Store*
- Reducer
    > чистая функция, которая отвечает за генерацию\
    > нового состояния на базе текеущего состояния\
    > состояние не меняется, а генерируется новое

## Example
./redux
```ts
// ./store

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
```
```ts
// ./numberReducer.ts

import { CHANGE_NUMBER, SET_USER_VALUE } from "./actions";


// const action = {
//     type: 'SET_USER_VALUE',
//     payload: 'some data(str, int, func, obj)' // options,
// }

const initialState = {
    numberValue: 0,
    userValue: 0,
};

const numberReducer = (state = initialState, action: {type: string, payload: string}) => {
    switch (action.type) {
        case SET_USER_VALUE:
            return {
                ...state,
                userValue: action.payload,
        }
        case CHANGE_NUMBER:
            return {
                ...state,
                numberValue: state.numberValue + Number(state.userValue)
        }
        default:
            return state;
    }
}

export { numberReducer };
```
```ts
// ./actions.ts
const CHANGE_NUMBER = 'CHANGE_NUMBER';
const SET_USER_VALUE = 'SET_USER_VALUE';

const changeNumber = () => {
    return{
        type: CHANGE_NUMBER
    }
};

const setUserValue = (payload: string) => {
    return {
        type: SET_USER_VALUE,
        payload: payload,
    }
}


export {
    CHANGE_NUMBER,
    SET_USER_VALUE,
    changeNumber,
    setUserValue,
}
```
