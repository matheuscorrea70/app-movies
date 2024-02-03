import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './app.css'

const queryClient = new QueryClient()

function App() {
  return <QueryClientProvider client={queryClient}>App</QueryClientProvider>
}

export default App
