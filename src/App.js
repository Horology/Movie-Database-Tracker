import Main from './Main';
import SingleMovie from './SingleMovie';
import './App.css';
import React from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Watched from './Watched';
import Watchlist from './Watchlist';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path ="/*" element = {<Main/>} /> 
        <Route path = "movie/:id" element = {<SingleMovie/>} />  
        <Route path = "/watched" element = {<Watched/>} />  
        <Route path = "/watchlist" element = {<Watchlist/>} />  
      </Routes>
    </>
    
  );
}



export default App;
