import { useQuery } from '@tanstack/react-query'
import { MovieDBEndpointKeys } from 'common/services/movieDB/movieDBConstants'
import MovieDBService from 'common/services/movieDB/movieDBService'
import { useParams } from 'react-router-dom'

export const useMovieImagesQuery = () => {
  const { movieId } = useParams<{ movieId: string }>()
  
  return useQuery({
    queryKey: [MovieDBEndpointKeys.GetMovieImages, movieId],
    queryFn: () => MovieDBService.getMovieImages(movieId || ''),
    enabled: Boolean(movieId)
  })
}
