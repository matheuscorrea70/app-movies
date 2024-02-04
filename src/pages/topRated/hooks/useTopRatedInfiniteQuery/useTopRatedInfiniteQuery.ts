import { useInfiniteQuery } from '@tanstack/react-query'
import { MovieDBEndpointKeys } from 'common/services/movieDB/movieDBConstants'
import MovieDBService from 'common/services/movieDB/movieDBService'
import { TopRatedResponse } from 'common/services/movieDB/movieDBTypes'

export const ADDITIONAL_FOR_PENULTIMATE_POSITION = 2

export const useTopRatedInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [MovieDBEndpointKeys.GetTopRatedList],
    queryFn: ({ pageParam }) => MovieDBService.getTopRatedList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: TopRatedResponse) =>
      lastPage.page >= lastPage.total_pages ? undefined : lastPage.page + 1
  })
}
