import React from 'react'
import MovieCard from './movieCard'
import './movieList.css'
const MovieList = ({movieList,search,tabStar}) => {
    return (
        
        <div className='movie-list'>
          {movieList.filter(el=>el.rating>=tabStar.filter(el=>el.isColored).length).filter((movie)=> movie.title.toUpperCase().match(search.toUpperCase()))
          .map((movie)=> {return <MovieCard movieCard={movie}/>})}
        </div>
    )
}

export default MovieList