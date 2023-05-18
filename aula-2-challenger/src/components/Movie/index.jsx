/* eslint-disable react/prop-types */
import "./Movie.css";

function Movie(props) {
  return (
    <div className="movie-item">
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <div className="movie-info">
        <span>{props.data.director}</span>
        <span>{props.data.date}</span>
      </div>
    </div>
  );
}

export default Movie;
