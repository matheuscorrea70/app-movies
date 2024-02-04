import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSetupReactQueryConfig } from './hooks/useSetupReactQueryConfig'
import Routes from 'config/routes'
import './app.css'

const queryClient = new QueryClient()

function App() {
  useSetupReactQueryConfig()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}

export default App
