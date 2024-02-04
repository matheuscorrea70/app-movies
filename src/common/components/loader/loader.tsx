import CircleIcon from 'common/assets/icons/circle.svg?react'

type LoaderProps = {
  full?: boolean
}
const Loader = ({ full }: LoaderProps) => {
  return (
    <div className={`${full && 'flex justify-center'} p-4`} >
      <CircleIcon className="w-8 h-8 animate-spin text-gray-600 fill-blue-600" />
    </div>
  )
}

export default Loader
