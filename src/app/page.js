"use client"
import Search from "./components/Search";
import { useState, useEffect } from "react"
import fetchMovies from "./utils/fetchMovies";
import MovieCard from "./components/MovieCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesLoaded, setMoviesLoaded] = useState(false)
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    console.log("movies recieved");
  }, [movies])

  useEffect(() => {
    if (!searchTerm.trim()) return

    const handler = setTimeout(() => {
      fetchMovies(searchTerm, setErrorMessage, setMovies, setMoviesLoaded);
    }, 500)


    return () => clearTimeout(handler)
  }, [searchTerm])


  return (
    <div className="bg flex flex-col text-center">
      <h1 className="text-9xl my-40 bg-clip-text text-main">Streamflix</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {moviesLoaded && 
      <div className="w-[90%] mx-auto mt-30">
        <div className="flex flex-wrap gap-4 items-center justify-center">
        {movies.results.map((m, i) => {
          return <MovieCard key={i} movie={m}/>
        })}
      </div>
      </div>}
      
    </div>
  )
}