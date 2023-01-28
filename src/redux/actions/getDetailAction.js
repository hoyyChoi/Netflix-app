import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY

function getDetail(id){
    return async(dispatch,getState)=>{

        try{
            const Detailapi = await api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            const Reviewapi = await api.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            const Relatedapi = await api.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
            const Videoapi = await api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)

            https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
            console.log('zzzzz',Videoapi.data)
            dispatch({type:"GET_DETAIL",payload:{detail:Detailapi.data,review:Reviewapi.data,related:Relatedapi.data,video:Videoapi.data}})
        }catch(error){
            dispatch({type:"GET_DETAIL_ERROR"})
        }

    }
}
export const getDetailAction = {getDetail}