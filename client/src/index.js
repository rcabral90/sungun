import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';  
import { store } from './redux';

ReactDOM.render((
  <Provider store={store}>
        <App/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
