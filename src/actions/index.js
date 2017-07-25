import axios from "axios";

export function jokeData(joke) {
    return (dispatch)=> {
        return axios.get("http://api.icndb.com/jokes/random/").then((response)=>{
            console.log(response.data.value.joke)
            dispatch(setData(response.data.value.joke));
        }).catch((error)=>{
            throw error;
        })
    }
}

export function setData(joke) {
    return {
        type: "SET_DATA",
        joke
    }
}