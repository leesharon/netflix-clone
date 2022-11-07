import { Movie } from 'models/movie.model'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { movieService } from 'services/movie.service'
// import movieTrailer from 'movie-trailer'
const movieTrailer = require('movie-trailer')

interface Props {
    title: string
    fetchUrl: string
    isLargeRow: boolean
}

export const MovieRow: React.FC<Props> = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [videoId, setVideoId] = useState<string>('')

    useEffect(() => {
        (async () => {
            const movies = await movieService.query(fetchUrl)
            setMovies(movies)
        })()
    }, [fetchUrl])

    const onPosterClick = async (movieName: string | undefined) => {
        if (videoId) return setVideoId('')
        try {
            const url = await movieTrailer(movieName || '')
            const urlSearchParams = new URLSearchParams(new URL(url).search)
            const videoId = urlSearchParams.get('v')
            videoId && setVideoId(videoId)
        } catch (err) {
            console.log('Cannot get trailer:', err)
        }
    }

    const basePosterUrl = "https://image.tmdb.org/t/p/original"

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    if (!movies) return <h1>Loading...</h1>
    return (
        <section className="movie-row main-layout">
            <h2>{title}</h2>
            <div className={`row-posters ${isLargeRow && 'large-row'}`}>
                {movies.map(movie => (
                    <img
                        src={`${basePosterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id}
                        onClick={() => { onPosterClick(movie.name || movie.original_name || movie.title) }}
                    />
                ))}
            </div>
            {videoId && <YouTube videoId={videoId} opts={opts} />}
        </section >
    )
}
