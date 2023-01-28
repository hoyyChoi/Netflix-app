let initialState={
    search:{}
}

function getmoviesReducer(state=initialState,action){
    if(action.type=="GET_SEARCH"){
        return{...state,search:action.payload.search}
    }
    else if(action.type=='GET_SEARCH_ERROR'){
        return {...state}
    }
    return {...state}
}

export default getmoviesReducer