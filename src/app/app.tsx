import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './app.css'
import TopRated from 'pages/topRated'
import { useSetupReactQueryConfig } from './hooks/useSetupReactQueryConfig'

const queryClient = new QueryClient()

function App() {
  useSetupReactQueryConfig()

  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex justify-center text-gray-200'>
        <div className="px-4 max-w-screen-2xl">
          <TopRated />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
