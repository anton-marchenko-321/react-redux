import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'
import postsReducer from './slices/posts'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
    middleware: [
            ...getDefaultMiddleware({
                thunk: true,
                serializableCheck: false,
                immutableCheck: false,
            }),
            sagaMiddleware,
        ],
    devTools: process.env.NODE_ENV !== 'production',
    // preloadedState,
    // enhancers: [reduxBatch],
})

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store