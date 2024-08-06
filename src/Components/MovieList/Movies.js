import React from 'react';
import './Movies.css';
import Card from 'react-bootstrap/Card';

const Movies = ({ movies }) => {
  return (
    <>
      <div className='movies-wrapper'>
        {
          movies.length > 0 ? movies.map((movie, i) => (
            <div key={i} className='movie_card'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='img' src={movie.poster_path} />
                <Card.Body className='card-body'>
                  <Card.Title className='card_title'>{movie.original_title}</Card.Title>
                  <Card.Text className='card_text'>
                    <span>Popularity:</span> {movie.popularity ? movie.popularity : "N/A"}
                  </Card.Text>
                  <Card.Subtitle className='subtitle'>
                    Character: {movie.casts && movie.casts.length > 0 ? movie.casts[0].character : 'No Cast Information Available'}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          )) :<p className='info'>No Movies Found! 😢</p>
        }
      </div>
    </>
  );
}

export default Movies;
