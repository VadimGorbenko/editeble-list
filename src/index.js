import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import combinedReducers from './reducers/'

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  console.log('Subscribtion:', store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,document.getElementsByClassName('main')[0]);