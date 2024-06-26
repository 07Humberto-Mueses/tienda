import ReactDOM from 'react-dom'
import React from 'react'
import { ContextProvider } from './contexts/ContextProvider'

import { App } from './App'

import './index.css'

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
