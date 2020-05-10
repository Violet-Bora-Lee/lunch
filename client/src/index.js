import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './modules'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware
	)
)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
