import { Movie } from "models/movie.model"
import React, { useEffect, useState } from "react"
import { movieService } from "services/movie.service"
import { utilService } from "services/util.service"

interface Props {
    fetchUrl: string
}

export const Banner: React.FC<Props> = ({ fetchUrl }) => {

    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        (async () => {
            const movies = await movieService.query(fetchUrl)
            const movieIdx = utilService.getRandomIntInclusive(0, movies.length - 1)
            const movie = movies[movieIdx]
            setMovie(movie)
        })()
    }, [])

    const backgroundImgStyle = { backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }

    if (!movie) return <h1>Loading..</h1>
    return (
        <header
            className="banner"
            style={backgroundImgStyle}
        >
            <div className="banner-content">
                <h1>{movie.title || movie.name || movie.original_name}</h1>
                <div className="btn-container">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{movie.overview}</p>
            </div>
            <div className="fade-bottom" />
        </header>
    )
}