import React from 'react'
import Thumbnail from './Thumbnail';
import Button from './Button';
import {Link} from 'react-router-dom'

const MovieInfo = ({id, movie, setIsOpen, setMovieId}) => {
    const handleClick = () => {
        setMovieId(id)
        setTimeout(()=>setIsOpen(true), 500)
    }
    return (
            <div className = "flex-row">
                <button onClick={handleClick}>
                    <Thumbnail value = {movie}/>
                </button>
                <Button  value = {'Add to Watched'} id = {id}/>
                <Button  value = {'Add to Watchlist'} id = {id}/>
                
            </div>

    )
}

export default MovieInfo
