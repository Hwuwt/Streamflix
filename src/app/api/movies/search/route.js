import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    
      if (!process.env.TMDB_API_KEY) {
        return NextResponse.json({ error: 'TMDB key missing' }, { status: 500 });
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=true&language=en-US&page=1`;

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
    };

    const tmdb = await fetch(url, options);

    
    if (!tmdb.ok) {
        const text = await tmdb.text();
        return NextResponse.json({ error: `TMDB ${tmdb.status}: ${text}` }, { status: tmdb.status });
    }

    const data = await tmdb.json();
    return NextResponse.json(data)
}