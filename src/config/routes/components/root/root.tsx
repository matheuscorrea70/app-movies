import Header from 'common/components/header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center text-gray-200">
        <div className="px-4 py-8 max-w-screen-2xl">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root
