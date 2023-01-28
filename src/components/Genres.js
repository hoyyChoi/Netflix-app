import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const Genres = ({setGenre}) => {

    const genreList = useSelector(state=>state.movie.genreList) 
    
    
    const changeGenre = (name) =>{
        setGenre(name)
    }
  return (
    <div>
        {genreList&&genreList.map((item)=>(
            <Button variant="outline-danger" style={{margin:"5px"}} onClick={()=>changeGenre(item.name)}>{item.name}</Button>
        ))}
        
    </div>
  )
}

export default Genres