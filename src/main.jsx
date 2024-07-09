import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Components/Auth/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <AuthProvider>
 <App />
 </AuthProvider>
 </BrowserRouter>
 
)
