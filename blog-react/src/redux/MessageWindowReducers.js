
const TOGGLE_WINDOW = 'messageWindow/TOGGLE_WINDOW'

let initialState = {
    OpenWindow:false
}

const messageWindow = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WINDOW:
            return {
                ...state,
                OpenWindow: !state.OpenWindow
            }

        default:
            return state
    }
}

export const toggleWindow = () => ({type:TOGGLE_WINDOW})

export default messageWindow;
