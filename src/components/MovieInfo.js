import React, { useState } from 'react'
import { Badge,Container,Row,Col } from 'react-bootstrap'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaVoteYea,FaFilm} from 'react-icons/fa'
import MovieTrailer from './MovieTrailer'
import { useSelector } from 'react-redux'


const MovieInfo = ({info}) => {

    const detailInfo = ['Budget','Revenue', 'Release Day', 'Time']
    const [modalShow,setModalShow] = useState(false)
    const video = useSelector(state=>state.detail.video)


  return (
    <Container className='movie-info'>
        <Row>
            <Col lg={6} className='parent-poster'>
                <div className='movie-poster' style={{backgroundImage:"url("+`https://image.tmdb.org/t/p/original/${info.poster_path}`+')'}} ></div>
            </Col>
            <Col lg={6}>
                <div className='movie-text'>
                    <div style={{marginTop:"10px",marginBottom:"20px"}}>
                        {info.genres&&info.genres.map((genre)=>(
                             <Badge bg='danger' style={{margin:"10px",fontSize:"18px"}}>{genre.name}</Badge>
                        ))}
                    </div>
                    <div className='first-text'>
                        <div style={{fontSize:"60px",fontWeight:"600"}}>{info.title}</div>
                        <h3 style={{fontWeight:"400",margin:"10px"}}>{info.tagline}</h3>
                         <div className='detail-movie-info'>
                            <div style={{fontSize:"25px",fontWeight:"600"}}><FaVoteYea style={{marginRight:"10px"}}/>{info.vote_average}</div>
                            <div style={{fontSize:"25px",fontWeight:"600"}}><BsFillPeopleFill style={{marginRight:"10px"}}/>{info.popularity}</div>
                            {info.adult?<img width={40} src='https://post-phinf.pstatic.net/MjAxODA4MzBfMjUg/MDAxNTM1NTkzNzI3ODM3.gDTX42JjcyFbaU0vqq5wdOttMYFJ0nEIKD0NejU2ut4g.JT-Q_v9YvNj_4bsU7XmDhbTiYVi249YGAHebXjI54oMg.PNG/IKRzZAN9nPrxH-muItFESerMEloU.jpg?type=w400'/>
                            :
                            <img width={40} src='https://obj-kr.the1.wiki/data/7476616c6c2e706e67.png'/>}<div style={{fontSize:"25px",fontWeight:"600"}}></div>
                        </div>
                    </div>
                    <div className='second-text'>
                        <div>{info.overview}</div>
                    </div>
                    <div className='third-text'>
                        <div>
                            <Badge bg='danger' style={{margin:"15px",fontSize:"18px"}}>Budget</Badge> $ {info.budget}
                        </div>
                        <div>
                            <Badge bg='danger' style={{margin:"15px",fontSize:"18px"}}>Revenue</Badge> $ {info.revenue}
                        </div>
                        <div>
                            <Badge bg='danger' style={{margin:"15px",fontSize:"18px"}}>Release Day</Badge> {info.release_date}
                        </div>
                        <div>
                            <Badge bg='danger' style={{margin:"15px",fontSize:"18px"}}>Time</Badge> {info.runtime} Minute
                        </div>
                    </div>
                    <div className='last-text'>
                        <div onClick={()=>{setModalShow(true)}} className="trailer" style={{color:"inherit",fontSize:"25px",textDecoration:"none",cursor:"pointer"}}><FaFilm/> Watch Trailer</div>
                        <MovieTrailer
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            video={video}
                        />
                    </div>
                </div>   
            </Col>
        </Row>
    </Container>
  )
}

export default MovieInfo