
const TOGGLE_WINDOW = 'messageWindow/TOGGLE_WINDOW'
const MESSAGE_ERROR = 'messageWindow/MESSAGE_ERROR'

let initialState = {
    OpenWindow:false,
    messageError: null
}

const messageWindow = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WINDOW:
            return {
                ...state,
                OpenWindow: !state.OpenWindow
            }
        case MESSAGE_ERROR:
            return {
                ...state,
                messageError: !state.OpenWindow
            }

        default:
            return state
    }
}

export const toggleWindow = () => ({type:TOGGLE_WINDOW})
export const SetMessageError = (error) => ({type: MESSAGE_ERROR, payload: error})

export default messageWindow;
