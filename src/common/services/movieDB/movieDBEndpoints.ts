import { MovieDBEndpointKeys } from './movieDBConstants'

export const MovieDBEndpoints = {
  [MovieDBEndpointKeys.TopRatedList]: () => `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/top_rated`
}
