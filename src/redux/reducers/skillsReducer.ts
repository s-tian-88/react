import {
    SEARCH_SKILLS_REQUEST,
    SEARCH_SKILLS_SUCCESS,
    SEARCH_SKILLS_FAILURE,
    CHANGE_SEARCH_FIELD,
} from '../actions'


const initialState = {items: [], loading: false, error: null, search: '',};

function skillsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SEARCH_SKILLS_REQUEST:
            return {...state, loading: true, error: null,};
        case SEARCH_SKILLS_FAILURE:
            const {error} = action.payload;
            return {...state, loading: false, error,};
        case SEARCH_SKILLS_SUCCESS:
            const {items} = action.payload;
            return {...state, items, loading: false, error: null,};
        case CHANGE_SEARCH_FIELD:
            const {search} = action.payload;
            return {...state, search, loading: false};
        default:
            return state;
    }
}

export {
    skillsReducer,
}
