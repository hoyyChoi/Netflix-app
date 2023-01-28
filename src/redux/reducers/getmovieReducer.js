let initialState={
    popularMovies:{},
    topRated:{},
    upComing:{},
    loading:true,
    genreList:[],
    popular:[]
}

function getmoviesReducer(state=initialState,action){
    if(action.type=="GET_MOVIES_REQUEST"){
        return{...state,loading:true}

    }
    else if(action.type=="GET_MOVIES"){
        return {...state,popularMovies:action.payload.popularMovies,topRated:action.payload.topRated,upComing:action.payload.upComing,loading:false,genreList:action.payload.genreList}
    }else if(action.type=="GET_POPULAR"){
        return {...state,popular:action.payload.popular,loading:false}
    }else if(action.type=="SORT_POPULAR"){
        return {...state,popular:action.payload.popular,loading:false}
    }
    else if(action.type=='GET_MOVIES_ERROR'){
        return {...state,loading:true}
    }
    return {...state}
}
console.log('asdf')

export default getmoviesReducer