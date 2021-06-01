import { all } from 'redux-saga/effects'
import posts from './posts/posts'

function* rootSaga() {
    yield all([
        posts(),
    ])
}

export default rootSaga