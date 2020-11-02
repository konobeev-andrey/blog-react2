import {commentsApi, postsApi} from "../api/api";

const SET_COMMENTS_POST = "post/SET_COMMENTS_POST"
const SET_POST_OPEN = "post/SET_POST_OPEN"
const SET_POST_OPEN_ERROR = "post/SET_POST_OPEN_ERROR"
const ADD_COMMENT = "post/ADD_COMMENT"

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
        case SET_POST_OPEN_ERROR:
            return {
                ...state,
                post: action.payload
            }
            case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
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
export const setPostOpenError = (error) => ({
    type: SET_POST_OPEN_ERROR,
    payload: {error: error}
})
export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
})

export const getCommentsPost = (postId) => {
    return async (dispatch) => {
        let response = await commentsApi.getCommentPost(postId)
        if (response.status === 200) {
            dispatch(setCommentsPost(response.data));
        }
        if (response.status === 404) {
            console.log('error')
        }

    }
}
export const getPostOpen = (postId) => {
    return async (dispatch) => {
        let response = await postsApi.getPost(postId)
        if (response.status === 200) {
            dispatch(setPostOpen(response.data));
        }
        if (response.status === 404) {
            dispatch(setPostOpenError(true))
        }

    }
}
export const setComment = ({postId,id,name,email,body}) => {
    return async (dispatch) => {
        let response = await commentsApi.addCommentPost({postId,id,name,email,body})
        if (response.status === 201) {
            dispatch(addComment({postId,id,name,email,body}));
        }

    }
}


export default postReducer