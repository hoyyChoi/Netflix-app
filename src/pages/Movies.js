import SearchFilter from '../components/SearchFilter'
import MoviePopular from '../components/MoviePopular'
import {Container,Row,Col} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import ClipLoader from "react-spinners/ClipLoader";
import { getSearchAction } from '../redux/actions/getSearchAction'
import {useSearchParams} from 'react-router-dom'
import Paginations from '../components/Paginations'
import Rangeslider from '../components/Rangeslider'
import Genres from '../components/Genres'


const Movies = () => {

    const dispatch = useDispatch()
    const{popularMovies,topRated,upComing,loading} = useSelector(state=>state.movie)
    const popular = useSelector(state=>state.movie.popular)
    const [query,setQuery] = useSearchParams()
    let searchquery = query.get('q') || ""
    const [activePage,setActivePage] = useState(1)
    const [genre,setGenre] = useState('')

    const search= useSelector(state=>state.search.search)
    console.log('qqqq',popular)

   
    useEffect(()=>{
        dispatch(movieAction.popular(activePage))
        dispatch(getSearchAction.getSearch(searchquery))
        
    },[searchquery,activePage])

    if(loading){
        return <div className="containter" style={{display:"flex",justifyContent:"center",alignItems:'center',height:'100vh'}}>
                    <ClipLoader  color="#ffff" loading={loading} size={150}/>
                 </div>
    }else{
        return (
            <Container>
                <Row>
                    <Col lg={4}>
                        <div style={{marginTop:"30px"}}>
                            <SearchFilter/>
                            <Rangeslider activePage={activePage}/>
                            <h1 style={{textAlign:"center"}}>{genre}</h1>
                            <div>
                                <Genres setGenre={setGenre}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        {searchquery==""?<MoviePopular movies={popular}/>:<MoviePopular movies={search}/> }
                    </Col>
                    
                </Row>
                <Paginations activePage={activePage} setActivePage={setActivePage}/>
            </Container>
        )
    }
  
}

export default Movies