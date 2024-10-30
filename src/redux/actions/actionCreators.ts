import {
    SEARCH_SKILLS_FAILURE,
    SEARCH_SKILLS_REQUEST,
    SEARCH_SKILLS_SUCCESS,
    CHANGE_SEARCH_FIELD,
} from './'


const searchSkillsRequest = (search: any) => ({
    type: SEARCH_SKILLS_REQUEST, payload: {search}
});
const searchSkillsFailure = (error: any) => ({
    type: SEARCH_SKILLS_FAILURE, payload: {error}
});
const searchSkillsSuccess = (items: any) => ({
    type: SEARCH_SKILLS_SUCCESS, payload: {items}
});
const changeSearchField = (search: any) => ({
    type: CHANGE_SEARCH_FIELD, payload: {search}
});

export {searchSkillsRequest, searchSkillsFailure, searchSkillsSuccess, changeSearchField, }
