import './assets/styles/main.scss'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'
import { MovieRow } from 'components/MovieRow'
import { utilService } from 'services/util.service'

function App() {

   const API_KEY = '35dacddec306ef7f690bedd2e0a73b54'
   const requestUrls = {
      fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   }

   const movieRows = [
      { id: utilService.makeId(), title: 'NETFLIX ORIGINALS', fetchUrl: requestUrls.fetchNetflixOriginals },
      { id: utilService.makeId(), title: 'Treding Now', fetchUrl: requestUrls.fetchTrending },
   ]

   return (
      <div className='app'>
         <AppHeader />
         <main className='main-container'>
            {movieRows.map(row => (
               <MovieRow title={row.title} fetchUrl={row.fetchUrl} key={row.id} />
            ))}
         </main>
         <AppFooter />
      </div>
   )
}
export default App
