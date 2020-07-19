import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

// import api from './api';

// api.test()
// 	.then(({ data }) => console.log('response', data))

// .then(({ data }) => console.log('response2', data))

ReactDOM.render(
	(
		<BrowserRouter>
			<StoreProvider>
				<App />
			</StoreProvider>
		</BrowserRouter>
	),
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();