import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MovieListComponent.css";
import { FiSearch, FiHeart, FiTrash2 } from "react-icons/fi";

const MovieListComponent = () => {
  const [movieList, setMovieList] = useState([]);
  const [temp, setTemp] = useState("");
  const [details, setDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState(false);
  const [condition, setCondition] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const onTextChange = (e) => {
    setTemp(e.target.value);
    if (e.target.value === "") {
      setMovieList([]);
      setMovieDetails(false);
    }
  };

  const apiimdbIDData = async (id) => {
    let response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    setDetails(response.data);
  };

  const apiData = async (apiDatas) => {
    try {
      let response = await axios.get(`https://www.omdbapi.com/?s=${apiDatas}&apikey=${API_KEY}`);
      if (response.data.Response !== "False") {
        setMovieList(response.data.Search);
        setMovieDetails(true);
      } else {
        setMovieDetails(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    apiData(temp);
    setMovieDetails(true);
  };

  const handleMovieDetails = (imdbID) => {
    apiimdbIDData(imdbID);
    setCondition(true);
  };

  const handleCancel = () => {
    setCondition(false);
    setDetails([]);
  };

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (imdbID) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== imdbID);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <div className="logo">
        <h3 className="logo-title">Movies Hub</h3>
      </div>

      {/* Search Box */}
      <div className="searchBox">
        <input
          type="text"
          onChange={onTextChange}
          className="inputBox"
          value={temp}
          placeholder="Search Movie Name"
        />
        <button type="button" className="searchBtn" onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>

      {/* Movie List */}
      <div className="container px-4 text-center">
        <div className="row d-flex justify-content-center">
          {movieDetails ? (
            movieList.map((item) => (
              <div
                className="col-md-2 col-sm-12 mt-3 movieBox"
                key={item.imdbID}
                onClick={() => handleMovieDetails(item.imdbID)}
              >
                <div className="card bg-black outline-none">
                  <img
                    src={item.Poster !== "N/A" ? item.Poster : "page-not-found.jpg"}
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="movieYear">
                    <h3 className="MovieTitle">{item.Title}</h3>
                    <span>Year: {item.Year}</span>
                    <span>Type: {item.Type}</span>
                  </div>
                  <button className="favBtn" onClick={(e) => { e.stopPropagation(); addToFavorites(item); }}>
                    <FiHeart /> Add to Fav
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>Search Movies</h1>
          )}
        </div>

        {/* Movie Details Modal */}
        {condition && (
          <div className="box">
            <button onClick={handleCancel} className="cancelBtn">
              X
            </button>
            <div className="row movieDetails">
              <div className="col">
                <div className="card1">
                  <div className="image">
                    <img src={details.Poster} className="card-img-top" alt="Not Found" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-titles">Name: {details.Title}</h5>
                    <h6>Year: {details.Year}</h6>
                    <h6>Released: {details.Released}</h6>
                    <h6>Genre: {details.Genre}</h6>
                    <h6>Director: {details.Director}</h6>
                    <h6>Actors: {details.Actors}</h6>
                    <h6>Language: {details.Language}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Favorites Section */}
        <div className="favorites-container">
          <h2>Favorites</h2>
          <div className="row">
            {favorites.length > 0 ? (
              favorites.map((movie) => (
                <div className="col-md-2 col-sm-12 mt-3 movieBox" key={movie.imdbID}>
                  <div className="card bg-black outline-none">
                    <img
                      src={movie.Poster !== "N/A" ? movie.Poster : "page-not-found.jpg"}
                      className="card-img-top"
                      alt="Not Found"
                    />
                    <div className="movieYear">
                      <h3 className="MovieTitle">{movie.Title}</h3>
                      <span>Year: {movie.Year}</span>
                      <span>Type: {movie.Type}</span>
                    </div>
                    <button className="removeFavBtn" onClick={() => removeFromFavorites(movie.imdbID)}>
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No favorites added yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListComponent;
