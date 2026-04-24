import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '~/providers/theme.tsx'
import { ApiKeyProvider } from '~/providers/api-key.tsx'
import './assets/style/main.css'
import App from './App.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ApiKeyProvider>
          <App />
        </ApiKeyProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
