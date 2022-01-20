import React, {useState, useContext, useEffect} from 'react';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [moviesWatched, setMoviesWatched] = useState([]);
  const [moviesWatchlist, setMoviesWatchlist] = useState([]);
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if( data.Response === 'True'){
          setMovies(data.Search);
      }
    } catch (error) {
    }
  };

  const handleAddition = (value,id) =>{
    if(value === 'Add to Watched'){
      let [newWatched] = movies.filter((movie)=> movie.imdbID == id);
      const oldMovie = moviesWatched.find((movie) => movie.imdbID == id); 
      if(oldMovie){
          return
      }
      console.log(moviesWatched)
      return setMoviesWatched([...moviesWatched, newWatched])
    }
    let [newWatchlist] = movies.filter((movie)=> movie.imdbID == id);
    const wantedMovie = moviesWatchlist.find((movie) => movie.imdbID == id); 
    if(wantedMovie){
        return
    }
    return setMoviesWatchlist([...moviesWatchlist, newWatchlist])
  }

  let subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    fetchMovies(`${process.env.REACT_APP__API_ENDPOINT}&s=${query}`);
  
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, 
    query, setQuery, 
    moviesWatched, setMoviesWatched,
    moviesWatchlist, setMoviesWatchlist, handleAddition,
    customStyles, modalIsOpen, setIsOpen, afterOpenModal, closeModal}}>
      {children}
    </AppContext.Provider>
  );
};


  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };
  