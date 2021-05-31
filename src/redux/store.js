import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./rootReducere";
import rootSaga from "../saga/rootSaga";

const debug = process.env.NODE_ENV === "development";

// create a makeStore function
const makeStore = (preloadedState) => {
    // 1: Create the middleware
    const sagaMiddleware = createSagaMiddleware();

    // 2: Add an extra parameter for applying middleware:
    const store = configureStore({
        reducer,
        preloadedState,
        middleware: [
            ...getDefaultMiddleware({
                thunk: true,
                serializableCheck: false,
                immutableCheck: false,
            }),
            sagaMiddleware,
        ],
        devTools: debug,
    });

    // 3: Run your sagas on server
    store.sagaTask = sagaMiddleware.run(rootSaga);

    // 4: now return the store:
    return store;
};

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;