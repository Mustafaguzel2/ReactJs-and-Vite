import { useCallback, useEffect, useState, useMemo } from "react";
import "./App.css";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchCount } from "./appwrite";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000, [searchTerm]);

  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTIONS = useMemo(() => ({
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`
    },
  }), [API_KEY]);

  const fetchMovies = useCallback(async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();
      console.log(data);
      if (data.Response === "False") {
        setErrorMessage(data.Error || "Something went wrong");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
      return data.results;
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL, API_OPTIONS]);

  const loadTrendingMovies = useCallback(async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setErrorMessage("");
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm, fetchMovies]);

  useEffect(() => {
    loadTrendingMovies();
  }, [loadTrendingMovies]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy
            Without the Hassle{" "}
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 className="mt-10">Trending Movies</h2>
            <ul className="mt-10">
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                  <p>{movie.title}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {isLoading ? (<p className="text-white"><Spinner /></p>) : (
            errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
