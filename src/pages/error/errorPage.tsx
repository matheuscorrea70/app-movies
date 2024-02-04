import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message?: string }

  return (
    <section className='text-center '>
      <h1 className='mt-32 text-3xl font-bold'>Oops!</h1>
      <p className='mt-12'>Sorry, an unexpected error has occurred.</p>
      <p className='mt-8 text-gray-400'>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  )
}

export default ErrorPage
