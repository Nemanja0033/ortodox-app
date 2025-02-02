import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CurrentMonthProvider } from './context/CurrentMonthContext.tsx'
import { LanguageContextProvider } from './context/LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageContextProvider>
      <CurrentMonthProvider>
        <App />
      </CurrentMonthProvider>
    </LanguageContextProvider>
  </StrictMode>,
)
