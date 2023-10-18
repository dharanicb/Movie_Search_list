import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from './MovieItem'

const MovieList = () => {
  const data = useSelector((state)=> state.movieList)
  // console.log(data)

  return (
    <ul className='wrap'>
      {data.length > 0  && 
      data.map(eachItem => (
        <MovieItem key={eachItem.id}  data = {eachItem}/>
      ))} 
    </ul>
  )
}

export default MovieList