import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useCallback } from "react";
import AddForm from "./components/AddForm";

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const dataHandler =useCallback(async ()=> {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something Went Wrong...Retry!!!");
      }
      const data = await response.json();
      const tranformedMovies = data.results.map((movies) => {
        return {
          id: movies.episode_id,
          title: movies.title,
          openingText: movies.opening_crawl,
          releaseDate: movies.release_date,
        };
      });
      setMovie(tranformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[])
  useEffect(() => {
    dataHandler(), [];
  });
  let content = <p>No Movies found...</p>;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (movie.length > 0) {
    content = <MoviesList movies={movie} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddForm/>
      </section>
      <section>
        <button onClick={dataHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
