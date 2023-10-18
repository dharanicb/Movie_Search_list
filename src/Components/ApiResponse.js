// import React from 'react'
import { useDispatch} from 'react-redux'
import MovieList from './MovieList'
import { useEffect, useState } from 'react'
import axios from 'axios';

const ApiResponse = () => {
const [query , setQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1)
const [totalPages, setTotalPages] = useState(null)

const dispatch = useDispatch()


const OnSearchApi = async(dispatch,getData) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=bf8c2081c16f3d250cafa9ad02996ed5&query=${query}&page=${currentPage}`,
    )
    console.log(response)
    setTotalPages(response.data.total_pages)
    dispatch({type:"Search_todo",payload: response.data.results})
  } catch (error) {
    console.error('Error fetching movies:', error)
  }

}



const onPagenate = e => {
    if (e === 'pre') {
      setCurrentPage(currentPage - 1)
    }
    if (e === 'next') {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    dispatch(OnSearchApi)
  }, [currentPage])



  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      dispatch(OnSearchApi)
    }
  }

const OnSearchDeatils = () => {
  dispatch(OnSearchApi)
}

  return (
    <div>
      <h1 className='text-[30px] font-[800] m-[20px] text-[#ffffff] text-center hover:underline'>Search Movie List</h1>
      <div className='flex'>
      <input type='search' className='h-[60px] text-[#ffffff] movie ml-[16rem]' onKeyPress={handleKeyPress} placeholder='Search any movie name' onChange={e => setQuery(e.target.value)} value={query}/>
      <button onClick={OnSearchDeatils} className='py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-[0px] rounded-tl-none rounded-bl-none h-[61px] w-[100px]'>Search</button>
      </div>
      <MovieList />
      <div className="pagination">
          <button
            type="button"
            onClick={() => onPagenate('pre')}
            disabled={currentPage === 1}
            className="btns"
          >
            Previous
          </button>
          <span className='page'>
            {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => onPagenate('next')}
            disabled={currentPage === totalPages}
            className="btns"
          >
            Next
          </button>
        </div>
    </div>
  )
}

export default ApiResponse