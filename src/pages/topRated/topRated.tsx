import { useIntersectionObserver } from 'common/hooks/useIntersectionObserver'
import {
  useTopRatedInfiniteQuery,
  ADDITIONAL_FOR_PENULTIMATE_POSITION
} from './hooks/useTopRatedInfiniteQuery'
import { useRef } from 'react'
import Loader from 'common/components/loader'

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

  return (
    <section>
      <h1>Top Rated</h1>
      <ul>
        {data?.pages.map(page => (
          <div>
            {page.results.map((movie, index) => (
              <li>
                <div
                  className="mt-4"
                  key={movie.id}
                  ref={
                    page.results.length === index + ADDITIONAL_FOR_PENULTIMATE_POSITION && !isError
                      ? penultimateElementRef
                      : undefined
                  }>
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              </li>
            ))}
          </div>
        ))}
        {isFetching && <Loader />}
      </ul>
    </section>
  )
}

export default TopRated
