import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import Search from "./Components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=spider&apikey=1e50f614";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=1e50f614`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="React Movie Database" />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Container>
            <Row>
              {movies.map((movie, index) => (
                <Col className="mx-auto" xs="auto" xl="auto" sm="auto" md="auto" lg="auto">
                  <Movie key={`${index}-${movie.Title}`} movie={movie} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default App;
