import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;

    if (!id) return NextResponse.json({ error: 'No id found' }, { status: 404 });
    
      if (!process.env.TMDB_API_KEY) {
        return NextResponse.json({ error: 'TMDB key missing' }, { status: 500 });
    }

    const url = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en,null}`;

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