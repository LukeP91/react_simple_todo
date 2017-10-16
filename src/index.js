import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { reducer } from './todoListRedux'
import App from './App'

const store = createStore(reducer)
render(<App store={store} />, document.querySelector('#root'))
