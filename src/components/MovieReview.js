import React from 'react'
import { useSelector } from 'react-redux'

const MovieReview = ({review}) => {

    const lastReview = review.results&&review.results.length-1

  return (
    <div className='review-all'>
        {review.results&&review.results.map((result,idx)=>(
            <div className={lastReview==idx?'':'review-box'}>
                <h3>{result.author}</h3>
                <p>{result.content}</p>
            </div>
        ))}
    </div>
  )
}

export default MovieReview