import React from 'react'
import MoviePopularCard from './MoviePopularCard'

const MoviePopular = ({movies}) => {
  return (
    <div className="aa" style={{display:"flex",flexWrap:"wrap"}}>
        {movies&&movies.map((item)=>(
                <MoviePopularCard item={item}/>
            ))}
    </div>
  )
}

export default MoviePopular