import axios from 'axios'
import { MovieDBEndpoints } from './movieDBEndpoints'
import { Language } from 'common/types/language'
import {
  GetRecommendationsResponse,
  GetReviewsResponse,
  MovieResponse,
  TopRatedResponse
} from './movieDBTypes'

class MovieDBService {
  static getTopRatedList = async (page = 1) => {
    const { data } = await axios.get<TopRatedResponse>(MovieDBEndpoints.getTopRatedList(), {
      params: { language: Language.English, page }
    })

    return data
  }

  static getMovieById = async (movieId: string) => {
    const { data } = await axios.get<MovieResponse>(MovieDBEndpoints.getMovieById(movieId))

    return data
  }

  static getMovieImages = async (movieId: string) => {
    const { data } = await axios.get(MovieDBEndpoints.getMovieImages(movieId))

    return data
  }

  static getMovieCredits = async (movieId: string) => {
    const { data } = await axios.get(MovieDBEndpoints.getMovieCredits(movieId))

    return data
  }

  static getMovieReviews = async (movieId: string, page = 1) => {
    const { data } = await axios.get<GetReviewsResponse>(
      MovieDBEndpoints.getMovieReviews(movieId),
      { params: { page } }
    )

    return data
  }

  static getMovieRecommendations = async (movieId: string) => {
    const { data } = await axios.get<GetRecommendationsResponse>(
      MovieDBEndpoints.getMovieRecommendations(movieId)
    )

    return data
  }
}

export default MovieDBService
