import ErrorPage from 'pages/error'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './types'
import Root from './components/root'

const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, lazy: () => import('pages/topRated'),  },
      {
        path: RoutePath.MOVIE,
        lazy: () => import('pages/movie')
      }
    ]
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
