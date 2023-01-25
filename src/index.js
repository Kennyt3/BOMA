import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AppProvider from './context/appContext'
import ClothProvider from './context/clothContext'
import CartProvider from './context/cartContext'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <ClothProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ClothProvider>
    </AppProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
