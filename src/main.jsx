import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DayProvider } from './contexts/DayContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DayProvider>
    <App />
  </DayProvider>
  </BrowserRouter>,
)
