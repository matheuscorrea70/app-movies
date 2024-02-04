import ErrorPage from 'pages/error'
import MoviePage from 'pages/movie'
import TopRatedPage from 'pages/topRated'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './types'
import Root from './components/root'

const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TopRatedPage />,  },
      {
        path: RoutePath.MOVIE,
        element: <MoviePage />
      }
    ]
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
