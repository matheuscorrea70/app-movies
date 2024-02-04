import Loader from 'common/components/loader'
import { useMovieQuery } from './hooks/useMovieQuery'
import { formatTime } from 'common/helpers/time'
import Rating from 'common/components/rating'
import MovieReviews from './components/reviews'
import MovieBackdrop from 'common/components/movieBackdrop'
import MovieRecommendations from './components/recommendations'

const MoviePage = () => {
  const movieQuery = useMovieQuery()

  if (movieQuery.isLoading) {
    return <Loader />
  }

  if (movieQuery.isError || !movieQuery.data) {
    throw new Error('Not found')
  }

  const movie = movieQuery.data

  return (
    <section>
      <h1 className="text-center text-xl font-bold">{movie.title}</h1>
      <h2 className="text-center text-sm text-gray-400">
        {new Date(movie.release_date).toLocaleDateString()}
        {` (${movie.production_countries.map(item => item.iso_3166_1).join(', ')})`}
        {' - '}
        {movie.genres.map(item => item.name).join(', ')}
        {' - '}
        {formatTime(movie.runtime)}
      </h2>
      <Rating className="mt-1" voteAverage={movie.vote_average} voteCount={movie.vote_count} />
      <div className="flex justify-center">
        <MovieBackdrop
          width={500}
          path={movie.backdrop_path}
          className="rounded-lg w-full mt-4 max-w-2xl"
        />
      </div>
      <p className="mt-4">{movie.overview}</p>
      <MovieRecommendations />
      <MovieReviews />
    </section>
  )
}

export default MoviePage
