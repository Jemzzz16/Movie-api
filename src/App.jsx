import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import Searchbar from './Components/Searchbar/Searchbar';


import styles from './App.module.scss';

function App() {
  const [ movies, setMovies ] = useState([]);

  const getMovie = () => {
    const movieAPI = 'http://www.omdbapi.com/?s=marvel&apikey=4b904672'
    fetch(movieAPI)
    .then(response => {
      return response.json();
    })
    .then((jsonResponse) => {
      setMovies([...jsonResponse.Search])
    })
  }

  useEffect(() => {
    getMovie()
  }, []);

  // const getFilm = (movies) => {
  //   return <Card movie={movies} />
  // }

  
  return (
    <div className={styles.maindiv}>
      <Navbar />
      <div className={styles.heading}>
        <h1>OBDM Search</h1>
      </div>
      <Searchbar />
      <Card movie={movies}/>
    </div>
  );
}

export default App;
