import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CurrentMonthProvider } from './context/CurrentMonthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrentMonthProvider>
      <App />
    </CurrentMonthProvider>
  </StrictMode>,
)
