import React, {useState} from 'react';
import {useGlobalContext} from './context';
import MovieInfo from './MovieInfo'; 
import SingleMovie from './SingleMovie';
import Modal from 'react-modal';


export default function Main(){
    const {query, setQuery} = useGlobalContext();
    const {customStyles, modalIsOpen, setIsOpen, afterOpenModal, closeModal}= useGlobalContext();
    const {movies} = useGlobalContext();
    const [movieId, setMovieId] = useState(); 

    

    return(
        
        <div id="main">    
            <h1 className = 'title'>Movie Database</h1>
            <p align = "center" style = {{color: 'red'}}> Created this Web Application using React, Context API, a movie API, and TailwindCSS  </p>
            <form className = 'searchbar text-secondary2'>
                <label for = "movie">Enter Movie title </label>
                <input className = 'input-field bg-gray-light' 
                type = "text" 
                id = "movie"  
                name = "movie"
                placeholdar = 'hello'
                value = {query}
                onChange = {(e) =>{setQuery(e.target.value)}}
                onKeyDown = {(e)=>{e.preventDefault()}}
                />
            </form> 
            <div className = "database-container">
                {movies.map((movie) => {
                    let id = movie.imdbID;
                    return(
                        <MovieInfo  movie = {movie} 
                        id = {id} 
                        setIsOpen = {setIsOpen}
                        setMovieId = {setMovieId}/>
                    )
                })}
            </div>
            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} >
    
                <button className = 'm-2 hover:text-red p-1' onClick={closeModal}>Close</button>
                <SingleMovie movieId = {movieId}/>
            </Modal>
        </div>
        )
};