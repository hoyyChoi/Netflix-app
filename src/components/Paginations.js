import React,{useState} from 'react'
import Pagination from "react-js-pagination";
import { movieAction } from '../redux/actions/movieAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paginations = ({activePage,setActivePage}) => {

    const dispatch = useDispatch()

    const handlePageChange = (pageNumber)=>{
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber)
      }


    // useEffect(()=>{
    //   dispatch(movieAction.getMovies())
      
    // },[activePage])

  return (
    <div className='pagination'>
        <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange.bind(this)}/>
    </div>
  )
}

export default Paginations




 