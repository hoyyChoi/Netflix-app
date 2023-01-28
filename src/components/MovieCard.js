import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {

    const {genreList} = useSelector(state=>state.movie) 
    
    
    const navigate = useNavigate()

    const spaceMovieDetail = ()=>{
        navigate(`/movies/${item.id}`)
    }
    
    

  return (
    <div className='movie-card' 
    style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.backdrop_path}`+')',margin:"15px"}} 
    onClick={spaceMovieDetail}>
        <div className='overlay'>
            <h3>{item.title}</h3>
            <div>{item.genre_ids.map((id)=>{
                for(let i=0; i<=genreList.length; i++){
                    if(genreList[i].id==id){
                        return <Badge bg='danger' style={{margin:"3px"}}>{genreList[i].name}</Badge>
                    }
                }
            })
            }</div>
            <div>
                <span>vote: {item.vote_average}</span>
                
            </div>
            <span>{item.adult ? "청불" : "18세 이하"}</span>
        </div>
    </div>
  )
}

export default MovieCard

