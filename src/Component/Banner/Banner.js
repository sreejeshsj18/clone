import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../axios/axios";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
       console.log(response.data.results[1])
        let movieList =response.data.results ;
        let value = movieList[Math.floor(Math.random() * movieList.length)];
        setMovie(value);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url( ${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title?movie.title:movie.name: ""}</h1>
        <div className="buttons">
          <button className="btn">Play</button>
          <button className="btn">My list </button>
        </div>
        <div className="disc">{movie ? movie.overview : ""}</div>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
