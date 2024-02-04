import ErrorPage from 'pages/error'
import Movie from 'pages/movie'
import TopRated from 'pages/topRated'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './types'
import Root from './components/root'

const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: RoutePath.ROOT, element: <TopRated /> },
      {
        path: RoutePath.MOVIE,
        element: <Movie />
      }
    ]
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
