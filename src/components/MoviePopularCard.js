import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaVoteYea,FaFilm} from 'react-icons/fa'

const MoviePopularCard = ({item}) => {


    const genreList = useSelector(state=>state.movie.genreList) 
    
    const navigate = useNavigate()

    const spaceMovieDetail = ()=>{
        navigate(`/movies/${item.id}`)
    }
    

  return (
    <div className='popular-card'
        style={{backgroundImage:"url("+`https://image.tmdb.org/t/p/original/${item.backdrop_path}`+')',backgroundSize:"cover",opacity:'0.7'}} 
        onClick={spaceMovieDetail}>
        <div className='overla'>
            <div style={{display:"flex",alignItems:"center"}}>
                <img width={50} style={{margin:"15px"}} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                <h3>{item.title}</h3>
            </div>
            <div>{item.genre_ids.map((id)=>{
                for(let i=0; i<=genreList.length; i++){
                    if(genreList[i].id==id){
                        return <Badge bg='danger' style={{margin:"3px"}}>{genreList[i].name}</Badge>
                    }
                }
            })
            }</div>
            <div className='overview'>
                <p>{item.overview}</p>
            </div>
            <div className='detail-popular-movie-info'>
                <div style={{fontSize:"25px",fontWeight:"600"}}><FaVoteYea style={{marginRight:"10px"}}/>{item.vote_average}</div>
                <div style={{fontSize:"25px",fontWeight:"600"}}><BsFillPeopleFill style={{marginRight:"10px"}}/>{item.popularity}</div>
                {item.adult?<img width={40} src='https://post-phinf.pstatic.net/MjAxODA4MzBfMjUg/MDAxNTM1NTkzNzI3ODM3.gDTX42JjcyFbaU0vqq5wdOttMYFJ0nEIKD0NejU2ut4g.JT-Q_v9YvNj_4bsU7XmDhbTiYVi249YGAHebXjI54oMg.PNG/IKRzZAN9nPrxH-muItFESerMEloU.jpg?type=w400'/>
                :
                <img width={40} src='https://obj-kr.the1.wiki/data/7476616c6c2e706e67.png'/>}<div style={{fontSize:"25px",fontWeight:"600"}}></div>
            </div>
        </div>
    </div>
  )
}

export default MoviePopularCard



