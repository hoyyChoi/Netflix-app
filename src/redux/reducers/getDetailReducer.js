let initialState={
    detail:{},
    review:{},
    related:{},
    video:{},
    loading:true
}

function getDetailReducer(state=initialState,action){
    if(action.type=="GET_DETAIL"){
        return{...state,detail:action.payload.detail,review:action.payload.review,related:action.payload.related,video:action.payload.video,loading:false}
    }else if(action.type=="GET_DETAIL_ERROR"){
        return {...state}
    }
    return {...state}
}

export default getDetailReducer