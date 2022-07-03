import React from 'react'

const MovieCard = ({movie: {omdbID,Title,Type,Year,Poster}}) => {
  return (
    <div className="movie" key={omdbID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
         <img src={Poster !== 'N/A' ? Poster  : 'http://viaplaceholder.com/400'}
          alt={Title} />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
  )
}

export default MovieCard
