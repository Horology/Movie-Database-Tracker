import React from 'react'

const Thumbnail = ({value:{Title, Year, imdbID, Type, Poster}}) => {

    if(Poster == 'N/A'){
        return(
            <div className = 'movie-thumbnail border focus:ring-1' style = { {backgroundColor: 'gray'}}>
                <div className = 'text-gray-light'>Title: {Title}</div>
                <div className = 'movie-title'>Release Year: {Year}</div>
            </div>
        )
    }
    
    return (
        <div className = ' movie-thumbnail border' style = { {backgroundImage:`url(${Poster})`}}>
            <div className = 'text-gray-light'>Title: {Title}</div>
            <div className = 'text-gray-light'>Release Year: {Year}</div>
        </div>
    )
}

export default Thumbnail;
