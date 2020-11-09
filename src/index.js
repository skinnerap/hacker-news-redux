import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import Home from './views/home/Home';

// Custom Logging Middleware
const logger = () => {
  return next => {
    return action => {
      console.log('[MIDDLEWARE] Dispatching ' + action);
      const result = next(action);
      console.log('[MIDDLEWARE] Next State ' + store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
