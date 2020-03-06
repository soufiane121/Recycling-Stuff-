import defaultState from './state'

function reducer(state=defaultState, action){
switch (action.type) {
    case 'first_name':
        return{...state, first_name: action.payload.first_name}
    case "last_name":
        return {...state, last_name: action.payload.last_name}
    case "user_name":
        return {...state, user_name: action.payload.user_name}
    case "password":
        return {...state, password: action.payload.password}
    case "new": 
        return {...state, currentUser: action.payload.currentUser}
    case "loginDisplay": 
        return {...state, loginDisplay: !state.loginDisplay}
    case "currentUserId": 
        return {...state, currentUserId: action.payload.currentUserId}
    case 'searchInput':
        return {...state, searchInput: action.payload.searchInput}
    default:
        return state
}
}

export default reducer;