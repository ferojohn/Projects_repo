import React, { useState, useEffect } from 'react';
import './Home.css';
import Movies from '../Components/MovieList/Movies';
import Search from '../Components/Search/Search';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const api = 'https://jsonfakery.com/movies/paginated';

  useEffect(() => {
    axios.get(api).then((response) => {
      setMovies(response.data.data);
      setFilteredMovies(response.data.data);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);
  

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className='homepage d-flex justify-center align-items-center text-center'>
        <a href='./home' className='title'>Movie Search App</a>
      </div>
      <div className='movie-container'>
        <Search onSearch={handleSearch} />
        <Movies movies={filteredMovies} />
      </div>
    </>
  );
};

export default Home;
