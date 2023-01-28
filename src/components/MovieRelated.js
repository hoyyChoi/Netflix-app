import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const MovieRelated = () => {

    const related = useSelector(state=>state.detail.related)
    
  return (
    <Container className='related-movie' style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
 
            
              {related.results&&related.results.map((item)=>(
              <MovieCard item={item} style={{margin:"15px"}}/>
              ))}
            
        
        
    </Container>
  )
}

export default MovieRelated