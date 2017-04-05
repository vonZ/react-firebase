import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// const logger = createLogger();

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunk)
);

export default store;