import defaultState from './state'

function reducer(state=defaultState, action){
    switch (action.type) {
        case 'yes':
            return{...state, curruentUser: state.curruentUser = "Hello"}
        default:
            return state
    }
}

export default reducer;