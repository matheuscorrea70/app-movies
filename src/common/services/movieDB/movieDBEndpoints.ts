import { MovieDBEndpointKeys } from "./movieDBConstants";

export const MovieDBEndpoints = {
  [MovieDBEndpointKeys.TopRatedList]: () => {
    // TODO: Improve later to use env var
    // return `${process.env.API_CLUB_COURSE_CONSUMPTION_URL}/v1/purchase/checkout`

    return 'https://api.themoviedb.org/3/movie/top_rated'
  }
}