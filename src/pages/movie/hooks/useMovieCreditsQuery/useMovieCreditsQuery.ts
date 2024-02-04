import { useQuery } from '@tanstack/react-query'
import { MovieDBEndpointKeys } from 'common/services/movieDB/movieDBConstants'
import MovieDBService from 'common/services/movieDB/movieDBService'
import { useParams } from 'react-router-dom'

export const useMovieCreditsQuery = () => {
  const { movieId } = useParams<{ movieId: string }>()
  
  return useQuery({
    queryKey: [MovieDBEndpointKeys.GetMovieCredits, movieId],
    queryFn: () => MovieDBService.getMovieCredits(movieId || ''),
    enabled: Boolean(movieId)
  })
}
