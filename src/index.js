import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import combinedReducers from './reducers/'

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
	<Provider store={store}>
		<Router>
    	<div>
      	<Route path='/' component={App}/>
    	</div>
  </Router>
  </Provider>,document.getElementsByClassName('main')[0]);