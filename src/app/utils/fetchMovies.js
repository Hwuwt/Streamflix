export default async function fetchMovies(query, setErrorMessage, setMovies, setIsloading) {
    if (query === "") return;
    setIsloading(true);
    try {

        const res = await fetch(`api/movies/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMovies(data);
        setIsloading(false);

    } catch (err) {
        console.log('Something went wrong fetching movies' + err);
        setErrorMessage("Something went wrong fetching movies");
    }
}