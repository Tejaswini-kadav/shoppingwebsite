import React from 'react';
import ReactDOM from 'react-dom';
//import "./index.css";
import App from './App';
import cartReducer from "./Component/reducers/cartReducer";
import { Provider } from 'react-redux';
import './api.js';

import { createStore } from 'redux';

//import reportWebVitals from './reportWebVitals';
const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider >, document.getElementById('root')
);

