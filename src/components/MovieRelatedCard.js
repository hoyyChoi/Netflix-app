// import React from 'react'
// import { Badge } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const MovieRelatedCard = ({item}) => {

//     const navigate = useNavigate()

//     const spaceMovieDetail = ()=>{
//         navigate(`/movies/${item.id}`)
//     }
//     console.log('movieㅋㅋㅋd',item)
    

//   return (
//     <div className='movie-card'
//   style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.backdrop_path}`+')', marginBottom:"100px"}} 
//     onClick={spaceMovieDetail}>
//         <div className='overlay'>
//             <h3>{item.title}</h3>
//             <div>
//                 <span>vote: {item.vote_average}</span>
                
//             </div>
//             <span>{item.adult ? "청불" : "18세 이하"}</span>
//         </div>
//     </div>
//   )
// }

// export default MovieRelatedCard