import {CREATE_POST} from "./types";

const initialState = {
    posts: []
}
export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  CREATE_POST:
            return (
                    { ...state, posts: state.posts.concat([action.payload]) }
            )
            default: return state
    }
}


export const setUsers = payload => ({type: SET_USERS, payload})
export const fetchUsers = () => ({type: FETCH_USERS})
