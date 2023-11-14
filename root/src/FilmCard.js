import React from 'react';
import { useNavigate } from 'react-router-dom';


function FilmCard({ title, description, posterURL, rating, trailerLink }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/film/${title.toLowerCase().replace(/\s+/g, '-')}`);
      };
    return (
    <div className="film-card" onClick={handleClick}>
      <img src={posterURL} alt={title} style={{ width: '180px'}} />
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <p>Rating: {rating}</p> */}
      <a href={trailerLink} target="_blank" rel="noopener noreferrer">
        Bande-annonce
      </a>
    </div>
  );
}

export default FilmCard;
