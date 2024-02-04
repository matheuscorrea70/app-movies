import { useIntersectionObserver } from 'common/hooks/useIntersectionObserver'
import {
  useTopRatedInfiniteQuery,
  ADDITIONAL_FOR_PENULTIMATE_POSITION
} from './hooks/useTopRatedInfiniteQuery'
import { useRef } from 'react'
import Loader from 'common/components/loader'
import MovieCard from 'common/components/movieCard'
import Rating from 'common/components/rating'

const TopRatedPage = () => {
  const observer = useRef<IntersectionObserver>()

  const { data, isFetching, isError, isLoading, hasNextPage, fetchNextPage } =
    useTopRatedInfiniteQuery()

  const penultimateElementRef = useIntersectionObserver({
    observer,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage
  })

  if (isLoading) {
    return <Loader />
  }

  let position = 0

  return (
    <section>
      <h1 className="font-bold py-4 text-center">Top Rated</h1>
      <div className="flex flex-wrap justify-center gap-4 items-stretch">
        {data?.pages.map(page =>
          page.results.map((movie, index) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                picturePath={movie.backdrop_path}
                title={`${++position}. ${movie.title}`}
                releaseDate={new Date(movie.release_date)}
                ref={
                  page.results.length === index + ADDITIONAL_FOR_PENULTIMATE_POSITION && !isError
                    ? penultimateElementRef
                    : undefined
                }>
                <Rating voteAverage={movie.vote_average} voteCount={movie.vote_count} />
              </MovieCard>
            )
          })
        )}
      </div>
      {isFetching && <Loader full />}
    </section>
  )
}

export default TopRatedPage
