import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './store';
import { Provider as StoreProvider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
