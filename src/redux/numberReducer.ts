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
