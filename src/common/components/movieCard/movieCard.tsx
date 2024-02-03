import { ForwardedRef, forwardRef } from 'react'
import { formatNumber } from 'common/helpers/number'
import StarIcon from 'common/assets/icons/star.svg?react'

type MovieCardProps = {
  picturePath: string
  position: number
  title: string
  releaseDate: Date
  voteAverage: number
  voteCount: number
}

const MovieCard = forwardRef(
  (
    { picturePath, position, title, releaseDate, voteAverage, voteCount }: MovieCardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className="text-sm flex items-center flex-col mt-4 grow-0 max-w-full sm:max-w-72 transform transition duration-500 hover:scale-150 hover:z-10 bg-gray-900 rounded-lg pb-4"
        ref={ref}>
        <div className="inline-block w-72 h-44">
          <img
            src={`https://image.tmdb.org/t/p/w300/${picturePath}`}
            className="rounded-lg w-full"
          />
        </div>
        <h2 className="text-center font-bold">
          {position} - {title} - {new Date(releaseDate).getFullYear()}
        </h2>
        <div className="text-center flex justify-center gap-1 items-center text-xs mt-1">
          <StarIcon className="w-4 fill-yellow-400" />
          <span>{voteAverage.toFixed(1)}</span>
          <span className="text-gray-400">({formatNumber(voteCount)})</span>
        </div>
      </div>
    )
  }
)

export default MovieCard