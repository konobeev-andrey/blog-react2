import {commentsApi, postsApi} from "../api/api";

const SET_COMMENTS_POST = "post/SET_COMMENTS_POST"
const SET_POST_OPEN = "post/SET_POST_OPEN"

let initialState = {
    comments: [],
    post: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS_POST:
            return {
                ...state,
                comments: action.payload
            }
        case SET_POST_OPEN:
            return {
                ...state,
                post: action.payload
            }

        default:
            return state
    }
}

export const setCommentsPost = (comments) => ({
    type: SET_COMMENTS_POST,
    payload: comments
})
export const setPostOpen = (post) => ({
    type: SET_POST_OPEN,
    payload: post
})

export const getCommentsPost = (postId) => {
    return async (dispatch) => {
        let response = await commentsApi.getCommentPost(postId)
        if (response.status === 200) {
            dispatch(setCommentsPost(response.data));
        }

    }
}
export const getPostOpen = (postId) => {
    return async (dispatch) => {
        let response = await postsApi.getPost(postId)
        if (response.status === 200) {
            dispatch(setPostOpen(response.data));
        }

    }
}


export default postReducer