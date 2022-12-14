import './assets/styles/main.scss'
import { MovieRow } from 'components/MovieRow'
import { utilService } from 'services/util.service'
import { Banner } from 'components/Banner'
import { AppHeader } from 'components/AppHeader'

function App() {

   const API_KEY = '35dacddec306ef7f690bedd2e0a73b54'
   const requestUrls = {
      fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&cors=true`,
      fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&cors=true`,
      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&cors=true`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&cors=true`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&cors=true`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&cors=true`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&cors=true`,
      fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&cors=true`,
   }

   const movieRowsData = [
      { id: utilService.makeId(), title: 'NETFLIX ORIGINALS', fetchUrl: requestUrls.fetchNetflixOriginals },
      { id: utilService.makeId(), title: 'Trending Now', fetchUrl: requestUrls.fetchTrending },
      { id: utilService.makeId(), title: 'Top Rated', fetchUrl: requestUrls.fetchTopRated },
      { id: utilService.makeId(), title: 'Action Movies', fetchUrl: requestUrls.fetchActionMovies },
      { id: utilService.makeId(), title: 'Comedy Movies', fetchUrl: requestUrls.fetchComedyMovies },
      { id: utilService.makeId(), title: 'Horror Movies', fetchUrl: requestUrls.fetchHorrorMovies },
      { id: utilService.makeId(), title: 'Romance Movies', fetchUrl: requestUrls.fetchRomanceMovies },
      { id: utilService.makeId(), title: 'Documentaries', fetchUrl: requestUrls.fetchDocumentaries },
   ]

   return (
      <div className="app">
         <AppHeader />
         <Banner fetchUrl={requestUrls.fetchNetflixOriginals} />
         {movieRowsData.map((row, idx) => (
            <MovieRow
               isLargeRow={(idx === 0) ? true : false}
               title={row.title}
               fetchUrl={row.fetchUrl}
               key={row.id}
            />
         ))}
      </div>
   )
}
export default App
