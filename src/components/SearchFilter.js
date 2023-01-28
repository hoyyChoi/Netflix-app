import React,{useState}from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { movieAction } from '../redux/actions/movieAction';

const SearchFilter = () => {

  const dispatch = useDispatch()
  const [sortOption,setSortOption] = useState("sort")
  const popular = useSelector(state=>state.movie.popular)
  const navigate = useNavigate()

  console.log('search,',popular)
  
  const option =(opt)=>{
    setSortOption(opt)

    if(opt==='popularity(L)'){
      popular&&popular.sort(function(a,b){
        return a.popularity - b.popularity
      })
      dispatch(movieAction.sortPopular(popular))
    }
    else if(opt==='popularity(H)'){
      popular&&popular.sort(function(a,b){
        return b.popularity - a.popularity 
      })
      dispatch(movieAction.sortPopular(popular))
    }
    else if(opt==="vote(L)"){
      popular&&popular.sort(function(a,b){
        return a.vote_average - b.vote_average
      })
      dispatch(movieAction.sortPopular(popular))
    }
    else if(opt==="vote(H)"){
      popular&&popular.sort(function(a,b){
        return b.vote_average - a.vote_average
      })
      dispatch(movieAction.sortPopular(popular))
    }
  }

   
  


  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {sortOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>option('popularity(L)')}>popularity(L)</Dropdown.Item>
        <Dropdown.Item onClick={()=>option('popularity(H)')}>popularity(H)</Dropdown.Item>
        <Dropdown.Item onClick={()=>option('vote(L)')}>vote(L)</Dropdown.Item>
        <Dropdown.Item onClick={()=>option('vote(H)')}>vote(H)</Dropdown.Item>
        <Dropdown.Item onClick={()=>option('ReleaseDay')}>Release-Day</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchFilter