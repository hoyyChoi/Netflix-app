import React, { useEffect } from 'react'
import MovieReview from './MovieReview'
import MovieRelated from './MovieRelated'
import { Container,Button,Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const MovieAddInfo = () => {

    const [look,setLook] = useState('review')
    const review = useSelector(state=>state.detail.review)
    const lastReview = review.results&&review.results.length-1
    
    useEffect(()=>{},[])

    const openReview = ()=>{
        setLook('review')
    }

    const openRelated = ()=>{
        setLook('related')
    }

  return (
    <Container className='movie-add-info'>
        <Row>
            <Col lg={2}><Button className='change-review' variant="outline-danger" onClick={openReview}><div style={{fontSize:"20px"}}>Review ({lastReview+1})</div></Button></Col>
            <Col><Button className='change-review' variant="outline-danger" onClick={openRelated}><div style={{fontSize:"20px"}}>Related Movies</div></Button></Col>
            {look=='review'?<MovieReview review={review}/>:<MovieRelated/>}
            
        </Row>
    </Container>
  )
}

export default MovieAddInfo