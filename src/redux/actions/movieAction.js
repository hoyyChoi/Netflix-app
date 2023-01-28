import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY

function getMovies(){
    return async(dispatch,getState)=>{

        try{
            dispatch({type:"GET_MOVIES_REQUEST"})
            const popularMovieapi =  api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedapi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upComingapi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`) 
            const Genreapi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            
            let [popularMovies,topRated,upComing,genreList] = await Promise.all([popularMovieapi,topRatedapi,upComingapi,Genreapi])
            dispatch({type:"GET_MOVIES",payload:{popularMovies:popularMovies.data, topRated:topRated.data, upComing:upComing.data, genreList:genreList.data.genres}})
        }catch(error){
            dispatch({type:"GET_MOVIES_ERROR"})
        }

    }
}

function popular(page){
    return async(dispatch,getState)=>{
        try{
            const popularapi = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)

            dispatch({type:"GET_POPULAR",payload:{popular:popularapi.data.results}})
        }catch(error){
            dispatch({type:"GET_MOVIES_ERROR"})
        }

    }
}

function sortPopular(popular){
    return (dispatch,getState)=>{
        dispatch({type:'SORT_POPULAR',payload:{popular}})

    }
}


export const movieAction = {getMovies,popular,sortPopular}