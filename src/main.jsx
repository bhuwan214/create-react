import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NetflixSeries } from './components/NetflixSeries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <NetflixSeries/>
  </StrictMode>,
)
