import Loader from 'common/components/loader'
import MovieCard from 'common/components/movieCard'
import { useMovieRecommendationsQuery } from 'pages/movie/hooks/useMovieRecommendationsQuery'

const MovieRecommendations = () => {
  const movieRecommendationsQuery = useMovieRecommendationsQuery()

  if (movieRecommendationsQuery.isLoading) {
    return <Loader />
  }

  if (
    movieRecommendationsQuery.isError ||
    !movieRecommendationsQuery.data ||
    !movieRecommendationsQuery.data.results
  ) {
    return null
  }

  const recommendations = movieRecommendationsQuery.data.results

  return (
    <section className="mt-8">
      <h2 className="font-bold text-lg">Recommendations</h2>
      <div className="flex flex-wrap gap-x-4 justify-center">
        {recommendations.map(item => (
          <>
            <MovieCard
              id={item.id}
              picturePath={item.backdrop_path}
              title={item.title}
              size="sm"
            />
          </>
        ))}
      </div>
    </section>
  )
}

export default MovieRecommendations
