import { formatNumber } from 'common/helpers/number'
import StarIcon from 'common/assets/icons/star.svg?react'

type RatingProps = {
  voteAverage: number
  voteCount: number
  className?: string
}

const Rating = ({ voteAverage, voteCount, className }: RatingProps) => {
  return (
    <div
      className={`flex justify-center gap-1 items-center text-xs ${className && ` ${className}`}`}>
      <StarIcon className="w-4 fill-yellow-400" />
      <span>{voteAverage.toFixed(1)}</span>
      <span className="text-gray-400">({formatNumber(voteCount)})</span>
    </div>
  )
}

export default Rating
