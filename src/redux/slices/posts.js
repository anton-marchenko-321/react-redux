import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    collection: []
}

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsRequested: (state, action) => {
            state.loading = true
        },
        postsSucceeded: (state, action) => {
            state.loading = false;
            state.error = null;
            state.collection = action.payload.posts
        },
        postsFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        }
    }
})

export const {
    postsRequested,
    postsSucceeded,
    postsFailed,
} = slice.actions

export default slice.reducer