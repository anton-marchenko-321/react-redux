import { call, put, takeLatest } from 'redux-saga/effects'
import {postsFailed, postsRequested, postsSucceeded} from "../../redux/slices/posts";
import {fetchPosts} from "./api";

function* postsRequest(action) {
    try {
        const responce = yield call(fetchPosts, { id: action.id })
        const { posts } = responce.data
        yield put(postsSucceeded({posts}))
    } catch (error) {
        yield put(postsFailed(error))
    }
}

function* postsSaga() {
    yield takeLatest(postsRequested, postsRequest)
}

export default postsSaga