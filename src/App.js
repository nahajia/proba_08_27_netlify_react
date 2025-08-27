import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

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
    </div>
  );
}

export default App;

