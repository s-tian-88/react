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


