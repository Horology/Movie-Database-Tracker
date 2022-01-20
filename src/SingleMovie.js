import React from 'react';
import {useGlobalContext} from './context';
import { Link } from 'react-router-dom';

export default function SingleMovie({movieId}){
    const {movies} = useGlobalContext();
    let [movie] = movies.filter((movie) =>{return movie.imdbID ===movieId})
  
    return(
        <div>
            <div className = 'img-container'>
                <img className = 'img-container m-auto' src = {`${movie.Poster}`} />
            </div>
            <div className = 'flex flex-col'>
                <h2 className = 'text-blue mt-2'>{movie.Title}</h2>
                <div className = ' mt-1'>{movie.Year}</div>
            </div>
        </div>
    )
};
