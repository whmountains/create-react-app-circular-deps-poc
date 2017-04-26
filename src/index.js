import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import a from './a'

console.log('from index.js, a =', a)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
