import { MovieDBEndpointKeys } from './movieDBConstants'

export const MovieDBEndpoints = {
  [MovieDBEndpointKeys.GetTopRatedList]: () =>
    `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/top_rated`,
  [MovieDBEndpointKeys.GetMovieById]: (movieId: string) =>
    `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/${movieId}`,
  [MovieDBEndpointKeys.GetMovieImages]: (movieId: string) =>
    `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/${movieId}/images`,
  [MovieDBEndpointKeys.GetMovieRecommendations]: (movieId: string) =>
    `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/${movieId}/recommendations`,
  [MovieDBEndpointKeys.GetMovieReviews]: (movieId: string) =>
    `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/${movieId}/reviews`,
  [MovieDBEndpointKeys.GetMovieCredits]: (movieId: string) =>
    `${import.meta.env.VITE_MOVIE_DB_API}/3/movie/${movieId}/credits`
}
