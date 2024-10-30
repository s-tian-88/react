import {
    take, // генерирует эффект для ожидания action определенного действия
    put, // генерирует эффект для dispatch определенного action
    spawn, // создвет паралельтный поток, в котором отслежтвается action
    //fork, // при ошибке приостанавливает работу всех saga
    debounce, // 
    takeLatest, // отклоняет предыдущие вызовы
    // call,
    retry
} from 'redux-saga/effects';
import {
    searchSkillsFailure,
    searchSkillsRequest,
    searchSkillsSuccess} from '../actions';
import {CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST} from '../actions/actionTypes';
import { searchSkills } from '../../services/fetchApi';

const SECOND = 1000;

function filterChangeSearchAction({type, payload}: {type: any, payload: any}) {
    return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== '';
}

function* handleChangeSearchSaga(action: any) {
    yield put (searchSkillsRequest(action.payload))
}

function* handleSearchSkillsSaga(action: any): any {
    try {
        // const data = yield call(searchSkills, action.payload.search);
        const retryCount = 3;
        const retryDelay = 1 * SECOND;
        const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.search);

        yield put(searchSkillsSuccess(data))
    } catch (e: unknown) {
        yield put(searchSkillsFailure(e.message));
    }
}

function* watchChangeSearchSaga() {
    yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga)
}

function* watchSearchSkillsSaga(): any {
    while(true) {
        yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga)
    }
}

// default saga
// function* changeSearchSaga() {
//     while (true) {
//         const action = yield take(filterChangeSearchAction)
//         yield put(
//             searchSkillsRequest(action.payload.search));
//     }
// }

export default function* rootSaga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
}
