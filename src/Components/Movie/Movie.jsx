import React from "react";
import styles from "./Movie.module.scss";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Card
      style={{ width: "18rem" }}
      className="mt-4 mb-2 card shadow bg-white rounded"
    >
      <Card.Img
        alt={`The movie titled: ${movie.Title}`}
        src={poster}
        className={styles.size}
      />
      <Card.Body className="card-body d-flex flex-column">
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>({movie.Year})</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
