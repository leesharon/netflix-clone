import Axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'
const axios = Axios.create({
   baseURL,
})

export const movieService = {
   query
}

//TODO cut only important info from the object
async function query(endpoint: string) {
   try {
      const response = await axios.get(endpoint)
      return response.data.results
   } catch (err) {
      console.log('Cannot get movies', err)
   }
}
