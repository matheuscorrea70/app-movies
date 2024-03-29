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

export type MovieResponse = {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type GetRecommendationsResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type GetReviewsResponse = {
  page: number
  results: {
    author: string
    author_details: { name: string; username: string; avatar_path?: string; rating: number }
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
  }[]
  total_pages: number
  total_results: number
}
