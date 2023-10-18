const MovieItem = (props) => {
const {data} = props
const {poster_path,title,release_date,vote_average,overview} = data

    return (
      <li className="movie-container">
          <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${title} poster`} className="w-[170px] h-[170px] m-[5px] rounded-[18px] text-center"/>
          <div className="m-[10px]">
            <h1 className="text-[#000000] text-[20px] font-mono font-[800] text-center m-[8px]">{title}</h1>
            <p className="text-[14px] m-[5]"><strong>RELEASE DATE :-</strong> {release_date}</p>
            <p className="text-[14px] m-[5]"><strong>RATING : </strong> {Math.round(vote_average)}</p>
            <p>{overview}</p>
          </div>
      </li>
    )
  }
  
  export default MovieItem