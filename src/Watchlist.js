import React, {useState} from 'react'
import {useGlobalContext} from './context';
import Thumbnail from './Thumbnail';
import Modal from 'react-modal';
import SingleMovie from './SingleMovie';

const Watchlist = () => {
    const {moviesWatchlist, setMoviesWatchlist, moviesWatched, setMoviesWatched} = useGlobalContext();
    const {customStyles, modalIsOpen, setIsOpen, afterOpenModal, closeModal}= useGlobalContext();
    const [movieId, setMovieId] = useState();

    if(!moviesWatchlist.length){
        return(
            <div className= "text-yellow text-center mt-40">Empty! Start adding movies please!</div>
        )
    }

    const handleRemove = (id) => {
        const tempmovies = moviesWatchlist.filter((movie) => {return movie.imdbID != id})
        setMoviesWatchlist(tempmovies)
    }

    const handleWatched = (id) => {
        const tempmovies = moviesWatchlist.filter((movie) => {return movie.imdbID == id})
        const tempmoviesWatchlist = moviesWatchlist.filter((movie) => {return movie.imdbID != id})
        setMoviesWatched(...moviesWatched, tempmovies);
        setMoviesWatchlist(tempmoviesWatchlist);

    }


    return (
        <div className = "database-container">
            {moviesWatchlist.map((movie, index) => {
                    let id = movie.imdbID;
                    return(
                        <div className = "flex-row">
                            <button onClick ={()=>{setMovieId(id);setTimeout(()=>setIsOpen(true), 500)}}>
                                <Thumbnail key = {index} 
                                value = {movie}/>
                            </button>  
                            <button className = 'bg-blue-400' onClick = {()=>{handleWatched(id)}}> Watched</button>
                            <button className = 'bg-red-400' onClick = {()=>{handleRemove(id)}}> Remove</button>
                        </div>
                    )
                })}
                <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} >
                    <button onClick={closeModal}>Close</button>
                    <SingleMovie movieId = {movieId}/>
                </Modal>
        </div>
    )
}

export default Watchlist
