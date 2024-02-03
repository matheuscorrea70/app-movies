import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './app.css'
import TopRated from 'pages/topRated'
import { useSetupReactQueryConfig } from './hooks/useSetupReactQueryConfig'

const queryClient = new QueryClient()

function App() {
  useSetupReactQueryConfig()

  return (
    <QueryClientProvider client={queryClient}>
      <TopRated />
    </QueryClientProvider>
  )
}

export default App
