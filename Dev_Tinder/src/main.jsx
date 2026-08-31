import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { appStore } from './Utilites/AppStore.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={appStore}>
         <ToastContainer />
 <App />
    </Provider>
     
    </BrowserRouter>
)