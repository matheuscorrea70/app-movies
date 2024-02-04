import Loader from 'common/components/loader'
import { useMovieReviewInfiniteQuery } from 'pages/movie/hooks/useMovieReviewInfiniteQuery'
import StarIcon from 'common/assets/icons/star.svg?react'

const MovieReviews = () => {
  const { isLoading, isError, data, isFetching, hasNextPage, fetchNextPage } =
    useMovieReviewInfiniteQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError || !data || !data.pages.length) {
    return null
  }

  return (
    <section className="mt-8">
      <h2 className="font-bold text-lg">Recommendations</h2>
      <ul>
        {data.pages.map(p =>
          p.results.map(review => (
            <li className="mt-4" key={review.id}>
              <div className="text-sm flex gap-1">
                {review.author}
                {review.author_details.rating && (
                  <>
                    <span> - </span>
                    <StarIcon className="w-3 fill-yellow-400" />
                    <span>{review.author_details.rating}</span>
                  </>
                )}
              </div>
              <p className="text-xs" title={review.content}>
                {review.content.substring(0, 200)}
                {review.content.length > 200 && '...'}
              </p>
            </li>
          ))
        )}
      </ul>
      {isFetching ? (
        <Loader />
      ) : (
        hasNextPage && (
          <div className="flex justify-center mt-4">
            <button onClick={() => fetchNextPage()}>Load More</button>
          </div>
        )
      )}
    </section>
  )
}

export default MovieReviews
