import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

    const dispatch = useDispatch()
    const{popularMovies,topRated,upComing,loading} = useSelector(state=>state.movie)

    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[])

    if(loading){
        return <div className="containter" style={{display:"flex",justifyContent:"center",alignItems:'center',height:'100vh'}}>
                    <ClipLoader  color="#ffff" loading={loading} size={150}/>
                 </div>
    }else{
        return (
    <div>
        <Banner movie={popularMovies.results[2]}/>

        <div style={{padding:"100px"}}>
            <h1>Top Popular Movies</h1>
            <MovieSlide movies={popularMovies}/>
            <h1>Top Rated Movies</h1>
            <MovieSlide movies={topRated}/>
            <h1>Upcoming Movies</h1>
            <MovieSlide movies={upComing}/>
        </div>
    </div>
  )
    }
}

export default Home 