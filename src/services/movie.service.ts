import { httpService } from './http.service';
import Axios from 'axios'

export const movieService = {
   query
}

//TODO cut only important info from the object
async function query(endpoint: string) {
   try {
      const data = await httpService.get(endpoint)
      return data.results
   } catch (err) {
      console.log('Cannot get movies', err)
   }
}
