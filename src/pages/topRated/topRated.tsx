import { useIntersectionObserver } from 'common/hooks/useIntersectionObserver'
import {
  useTopRatedInfiniteQuery,
  ADDITIONAL_FOR_PENULTIMATE_POSITION
} from './hooks/useTopRatedInfiniteQuery'
import { useRef } from 'react'
import Loader from 'common/components/loader'
import { formatNumber } from 'common/helpers/number'
import StarIcon from 'common/assets/icons/star.svg?react'

const TopRated = () => {
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
    <section className="">
      <h1 className="text-center">Top Rated</h1>
      <div className="flex flex-wrap justify-center gap-8 items-stretch">
        {data?.pages.map(page =>
          page.results.map((movie, index) => {
            position++

            return (
              <div
                className="mt-4 grow-0 max-w-96 md:max-w-80 xl:max-w-96"
                key={movie.id}
                ref={
                  page.results.length === index + ADDITIONAL_FOR_PENULTIMATE_POSITION && !isError
                    ? penultimateElementRef
                    : undefined
                }>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
                  className="rounded-lg"
                />
                <h2 className="text-center font-bold mt-2">
                  {position} - {movie.title} - {new Date(movie.release_date).getFullYear()}
                </h2>
                <div className="text-center flex justify-center gap-1 items-center text-sm">
                  <StarIcon className="w-4 fill-yellow-400" />
                  <span>{movie.vote_average.toFixed(1)}</span>
                  <span className="text-gray-400">({formatNumber(movie.vote_count)})</span>
                </div>
              </div>
            )
          })
        )}
        {isFetching && <Loader />}
      </div>
    </section>
  )
}

export default TopRated
