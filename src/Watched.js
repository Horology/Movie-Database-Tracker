import React, {useState} from 'react'
import {useGlobalContext} from './context';
import Thumbnail from './Thumbnail';
import Modal from 'react-modal';
import SingleMovie from './SingleMovie';

const Watched = () => {
    const {moviesWatched, setMoviesWatched} = useGlobalContext();
    const {customStyles, modalIsOpen, setIsOpen, afterOpenModal, closeModal}= useGlobalContext();
    const [movieId, setMovieId] = useState();

    if(!moviesWatched.length){
        return(
            <div className="text-secondary2 text-center mt-40">Empty! Start adding movies please!</div>
        )
    }

    const handleRemove = (id) => {
        console.log(moviesWatched); 
        const tempmovies = moviesWatched.filter((movie) => {return movie.imdbID != id})
        console.log(tempmovies);
        setMoviesWatched(tempmovies)
    }

    return (
        <div className = "database-container">
            {moviesWatched.map((movie, index) => {
                    let id = movie.imdbID;
                    return(
                        <div className = "flex-row" key = {id}>
                            <button onClick ={()=>{setMovieId(id);setTimeout(()=>setIsOpen(true), 500)}}>
                                <Thumbnail key = {index} 
                                value = {movie}/>
                            </button>  
                            <button className = 'bg-secondary2 mt-3 text-secondary p-1 hover:bg-blue' onClick = {()=>{handleRemove(id)}}> Remove</button>
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

export default Watched
