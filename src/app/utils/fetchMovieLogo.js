export default async function fetchMovies(id, setLogoPath) {
    if (id === "") return;
    try {
        const res = await fetch(`../api/movies/logo/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setLogoPath(data.logos[0].file_path)
    } catch (err) {
        console.log('Something went wrong fetching movies' + err);
    }
}