import { RoutePath } from 'config/routes/types'

const Header = () => {
  return (
    <header className="flex items-center justify-between sticky w-full top-0 left-0 bg-gray-950 text-red-600 z-20 py-4 px-8">
      <h1 className="font-bold text-md lg:text-xl">
        <a href={RoutePath.ROOT}>Movies.app</a>
      </h1>
    </header>
  )
}

export default Header
