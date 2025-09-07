import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [filmek, setFilmek] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch("https://reactnative.dev/movies.json");
        const data = await response.json();
        setMovies(data.movies); // itt van a filmek listája
      } catch (error) {
        console.error("Hiba történt:", error);
      }
    };

    loadMovies();

    const loadFilmek = async () => {
      try {
        const response = await fetch("https://nodejs102.dszcbaross.edu.hu/film");
        const data = await response.json();
        setFilmek(data); // itt van a filmek listája
        console.log(JSON.stringify(data))
      } catch (error) {
        console.error("Hiba történt:", error);
      }
    };

    loadFilmek();

  }, []);

  return (
    <div className="App">
      <h1>React próba netlify deploy</h1>
      <h2>Süt a nap</h2>

      <h3>Filmek:</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title} ({movie.releaseYear})</li>
        ))}
      </ul>
      <hr></hr>
      <ul>
        {filmek.map((movie) => (
          <li key={movie.film_id}>{movie.film_cim} ({movie.film_ev})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

