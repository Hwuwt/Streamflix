export default async function fetchMoviesById(id, setMovie, setErrorMessage, setIsLoading) {
    if (id === "") return;

    try {

        const res = await fetch(`../api/movies/search/tmdb/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMovie(data)
        setIsLoading(false)

    } catch (err) {
        console.log('Something went wrong fetching movie' + err);
        setErrorMessage("Something went wrong fetching movie");
    }
}