import React, { useEffect, useState } from 'react'
import { movieService } from 'services/movie.service'

interface Props {
    title: string
    fetchUrl: string
}

interface Movie {
    poster_path: string
    name: string
    id: string
}

export const MovieRow: React.FC<Props> = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        (async () => {
            const movies = await movieService.query(fetchUrl)
            console.log('movies', movies)
            setMovies(movies)
        })()
    }, [fetchUrl])

    const basePosterUrl = "https://image.tmdb.org/t/p/original"

    return (
        <section className="movie-row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <img
                        src={`${basePosterUrl}${movie.poster_path}`}
                        alt={movie.name}
                        key={movie.id}
                    />
                ))}
            </div>

        </section>
    )
}
