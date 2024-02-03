import { Language } from 'src/common/types/language'

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: Language
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TopRatedResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
