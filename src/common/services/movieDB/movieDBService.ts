import axios from 'axios'
import { MovieDBEndpoints } from './movieDBEndpoints'
import { Language } from 'src/common/types/language'
import { MovieList } from './movieDBTypes'

class MovieDBService {
  static getTopRatedList = async (page = 1) => {
    return axios.get<MovieList>(MovieDBEndpoints.topRatedList(), {
      params: { language: Language.English, page }
    })
  }
}

export default MovieDBService
