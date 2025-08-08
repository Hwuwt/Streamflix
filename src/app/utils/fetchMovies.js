export default async function fetchMovies(query, setErrorMessage, setMovies, setMoviesLoaded) {
    if (query === "") return;

    try {

        const res = await fetch(`api/movies/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMovies(data);
        setMoviesLoaded(true);

    } catch (err) {
        console.log('Something went wrong fetching movies' + err);
        setErrorMessage("Something went wrong fetching movies");
    }
}