import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

//make the store available to the entire application
//pass store as a property and wrap the app in provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

