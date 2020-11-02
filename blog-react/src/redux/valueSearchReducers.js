
const SET_VALUE_SEARCH = 'search/SET_VALUE_SEARCH'

let initialState = {
    valueSearch: "",
}

const valueSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE_SEARCH:
            return {
                ...state,
                valueSearch: action.valueSearch
            }
        default:
            return state
    }
}

export const setValueSearchState = (value) => ({type: SET_VALUE_SEARCH, valueSearch: value})

export default valueSearchReducer;
