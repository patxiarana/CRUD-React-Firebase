import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './firebase.js'
import 'bootswatch/dist/superhero/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
