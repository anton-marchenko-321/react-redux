import {put, takeEvery, call} from 'redux-saga/effects'
import {FETCH_USERS, setUsers} from '../redux/postsReducer'


const fetchUsersFromApi = () => fetch('http://localhost:3000/messages')

export function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put (setUsers(json))
}

export function* UserWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}
