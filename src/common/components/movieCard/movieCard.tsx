import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from 'config/routes/types'
import MovieBackdrop from '../movieBackdrop'

type MovieCardProps = {
  id: number
  picturePath: string
  title: string
  size?: 'sm' | 'md'
  releaseDate?: Date
  children?: ReactNode
}

const STYLE_BY_SIZE = {
  'sm': {
    movieContainer: 'w-40 h-32',
    title: 'text-xs'
  },
  'md': {
    movieContainer: 'w-80 h-52',
    title: 'text-md'
  }
}

const MovieCard = forwardRef(
  (
    { id, picturePath, children, title, size = 'md', releaseDate }: MovieCardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Link to={RoutePath.MOVIE.replace(':movieId', id.toString())}>
        <div
          className="text-sm flex items-center flex-col mt-4 transform transition duration-500 hover:scale-150 hover:relative  hover:z-30 bg-gray-900 rounded-lg pb-4"
          ref={ref}>
          <div className={`${STYLE_BY_SIZE[size].movieContainer} flex justify-between flex-col w4`}>
              <MovieBackdrop
                path={picturePath}
                width={300}
                className="rounded-t-lg w-full"
              />
            <h2 className={`${STYLE_BY_SIZE[size].title} text-center font-bold mt-2`}>
              {title}
              {releaseDate && ` - ${new Date(releaseDate).getFullYear()}`}
            </h2>
          </div>
          {children}
        </div>
      </Link>
    )
  }
)

export default MovieCard
