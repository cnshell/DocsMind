import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { inject } from '@vercel/analytics'

inject()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
