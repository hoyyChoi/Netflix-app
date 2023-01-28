import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getDetailAction } from '../redux/actions/getDetailAction'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import MovieInfo from '../components/MovieInfo'
import MovieAddInfo from '../components/MovieAddInfo'
import ClipLoader from "react-spinners/ClipLoader";
import { getSearchAction } from '../redux/actions/getSearchAction'

const MovieDetail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {detail} = useSelector(state=>state.detail)
    const loading = useSelector(state=>state.detail.loading)
    const review = useSelector(state=>state.detail.review)

    
 

    useEffect(()=>{
        dispatch(movieAction.getMovies())
        dispatch(getDetailAction.getDetail(id))
   
    },[id])


    if(loading){
        return <div className="containter" style={{display:"flex",justifyContent:"center",alignItems:'center',height:'100vh'}}>
                    <ClipLoader  color="#ffff" loading={loading} size={150}/>
                 </div>
    }else{
        return (
            <div>
                <MovieInfo info={detail}/>
                <MovieAddInfo/>
            </div>
        )
        }
}

export default MovieDetail