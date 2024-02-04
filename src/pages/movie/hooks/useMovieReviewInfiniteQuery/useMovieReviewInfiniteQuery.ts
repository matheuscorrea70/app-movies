import { useInfiniteQuery } from '@tanstack/react-query'
import { MovieDBEndpointKeys } from 'common/services/movieDB/movieDBConstants'
import MovieDBService from 'common/services/movieDB/movieDBService'
import { GetReviewsResponse } from 'common/services/movieDB/movieDBTypes'
import { useParams } from 'react-router-dom'

export const useMovieReviewInfiniteQuery = () => {
  const { movieId } = useParams<{ movieId: string }>()

  return useInfiniteQuery({
    queryKey: [MovieDBEndpointKeys.GetMovieReviews, movieId],
    queryFn: ({ pageParam }) => MovieDBService.getMovieReviews(movieId || '', pageParam),
    enabled: Boolean(movieId),
    initialPageParam: 1,
    getNextPageParam: (lastPage: GetReviewsResponse) =>
      lastPage.page >= lastPage.total_pages ? undefined : lastPage.page + 1
  })
}
