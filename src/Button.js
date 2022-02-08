import React, {useEffect, useState} from 'react'
import {useGlobalContext} from './context';

const Button = ({value, id}) => {
    const { moviesWatched, moviesWatchlist, handleAddition } = useGlobalContext();

    const [disable, setDisable] = useState(false); 

    const handleDisable = () => {
        const watchedMovie = moviesWatched.find((movie)=> movie.imdbID == id)
        const watchlistMovie = moviesWatchlist.find((movie)=> movie.imdbID == id)
        if(watchedMovie) {
            return setDisable(true);
        }
        if(value == 'Add to Watchlist'){
            if(watchlistMovie){
                return setDisable(true); 
            }
            return setDisable(false);
        }
        return setDisable(false);
    }

    useEffect(() => {
        handleDisable();
    },[moviesWatched, moviesWatchlist ])
  
    return (
        <button 
        className = 'bg-secondary2 text-secondary text-sm px-2 mt-3 hover:bg-violet-400 disabled:bg-purple hover:bg-blue-dark'
        onClick = {() => {handleAddition(value, id)}} 
        disabled = {disable}>
            {value}
        </button>
    )
}

export default Button
