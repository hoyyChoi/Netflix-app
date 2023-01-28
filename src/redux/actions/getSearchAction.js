import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY

function getSearch(searchquery){
    return async(dispatch,getState)=>{

        try{
            const Searchapi = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchquery}&page=1&include_adult=false`)
            console.log('dsfasasdasdadwasd')
            console.log('zzzzz',Searchapi)

            dispatch({type:"GET_SEARCH",payload:{search:Searchapi.data.results}})
        }catch(error){
            dispatch({type:"GET_SEARCH_ERROR"})
        }

    }
}
export const getSearchAction = {getSearch}