import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './containers/invite_container';
import ListContainer from './containers/list_container';
import store from './store/store';

const main = (
  <Provider store={store}>
    <ListContainer />
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));
