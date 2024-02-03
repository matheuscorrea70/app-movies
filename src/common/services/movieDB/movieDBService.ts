import axios from 'axios'
import { MovieDBEndpoints } from './movieDBEndpoints'
import { Language } from 'common/types/language'
import { TopRatedResponse } from './movieDBTypes'

class MovieDBService {
  static getTopRatedList = async (page = 1) => {
    const { data } = await axios.get<TopRatedResponse>(MovieDBEndpoints.topRatedList(), {
      params: { language: Language.English, page }
    })

    return data
  }
}

export default MovieDBService
