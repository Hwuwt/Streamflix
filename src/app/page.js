"use client"
import Search from "./components/Search";
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import fetchMovies from "./utils/fetchMovies";
import MovieCard from "./components/MovieCard";
import SpinnerSvg from "./components/svg/spinnerSvg";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [sortedMovies, setSortedMovies] = useState(null);
  const router = useRouter();


  useEffect(() => {
    if (!searchTerm.trim()) {
      setSortedMovies(null);
      setMovies(null);
    }

    const handler = setTimeout(() => {
      fetchMovies(searchTerm, setErrorMessage, setMovies, setIsloading);
    }, 500)

    return () => clearTimeout(handler)
  }, [searchTerm])

  useEffect(() => {
    if (!movies?.results) return
    const sorted = [...movies.results].sort((a, b) => {
      return (b.vote_count - a.vote_count)
    })
    setSortedMovies({...movies, results: sorted});
  }, [movies])


  return (
    <div className="bg flex flex-col text-center">
      <h1 className="text-9xl my-40 bg-clip-text text-main">Streamflix</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="w-[90%] mx-auto mt-30">
          {isLoading ? <div className="flex items-center justify-center"> <SpinnerSvg /> </div> : sortedMovies?.results?.length > 0 &&
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
            {sortedMovies.results.map((m, i) => {
              return <MovieCard key={i} movie={m} onClick={() => {router.push(`/movies/${m.id}`)}}/>
            })}
            </div>
        </div>}
      </div>
    </div>
  )
}