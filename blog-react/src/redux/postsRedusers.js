import {postsApi} from "../api/api";

const SET_POSTS_DATA = "posts/SET_POSTS_DATA"
const SET_POST = "posts/SET_POST"

let initialState = {
    data: [],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS_DATA:
            return {
                ...state,
                data: action.payload
            }
        case SET_POST:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}

export const setPostsData = (data) => ({
    type: SET_POSTS_DATA,
    payload: data
})
export const setPost = (post) => ({
    type: SET_POST,
    payload: post
})

export const getPostsData = () => {
    return async (dispatch) => {
        let response = await postsApi.getPosts()
        if (response.status === 200) {
            dispatch(setPostsData(response.data));
        }

    }
}
export const setPostApi = ({title, body, id, userId = 11}) => {
    return async (dispatch) => {
        let response = await postsApi.setPost({title, body, id, userId})
        if (response.status === 201) {
            dispatch(setPost({title, body, id, userId}));
        }

    }
}

export default postsReducer