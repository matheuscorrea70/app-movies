import { useQuery } from '@tanstack/react-query'
import { MovieDBEndpointKeys } from 'common/services/movieDB/movieDBConstants'
import MovieDBService from 'common/services/movieDB/movieDBService'
import { useParams } from 'react-router-dom'

export const useMovieQuery = () => {
  const { movieId } = useParams<{ movieId: string }>()
  
  return useQuery({
    queryKey: [MovieDBEndpointKeys.GetMovieById, movieId],
    queryFn: () => MovieDBService.getMovieById(movieId || ''),
    enabled: Boolean(movieId)
  })
}
