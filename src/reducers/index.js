let defaultState={
    joke: ""
}

const mainReducer = (state = defaultState, action)=> {
    if(action.type === "SET_DATA") {
        return {
            ...state,
            joke: action.joke
        }
    }else{
        return{
            ...state
        }
    }
}

export default mainReducer;