import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie,setMovie]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  async function dataHandler(){
    setIsLoading(true);
const response=await fetch("https://swapi.dev/api/films/");
const data=await response.json();
const tranformedMovies=data.results.map((movies)=>{
  return {
    id:movies.episode_id,
    title:movies.title,
    openingText:movies.opening_crawl,
    releaseDate:movies.release_date
  }
})
setIsLoading(false);
setMovie(tranformedMovies);
}


  return (
    <React.Fragment>
      <section>
        <button onClick={dataHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movie.length==0 && <p>No Movies found...</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && movie.length>0 && <MoviesList movies={movie} />}
        
      </section>
    </React.Fragment>
  );
}

export default App;
