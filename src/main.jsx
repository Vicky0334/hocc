import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContext from"./Context/DataContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataContext info="hello">
  <h1>Lorem ipsum dolor sit amet.</h1>
  </DataContext>
)
