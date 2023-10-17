import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProfile from './Pages/UserProfile/index.jsx'
import ContainerMessage from './Components/containeMessage/index.jsx'

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ContainerMessage limit={3} />
  </React.StrictMode>,
)
