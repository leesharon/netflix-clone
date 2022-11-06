import { Movie } from 'models/movie.model'
import React, { useEffect, useState } from 'react'
import { movieService } from 'services/movie.service'

interface Props {
    title: string
    fetchUrl: string
    isLargeRow: boolean
}

export const MovieRow: React.FC<Props> = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        (async () => {
            const movies = await movieService.query(fetchUrl)
            setMovies(movies)
        })()
    }, [fetchUrl])

    const basePosterUrl = "https://image.tmdb.org/t/p/original"

    return (
        <section className="movie-row main-layout">
            <h2>{title}</h2>
            <div className={`row-posters ${isLargeRow && 'large-row'}`}>
                {movies.map(movie => (
                    <img
                        src={`${basePosterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id}
                    />
                ))}
            </div>

        </section >
    )
}
