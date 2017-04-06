import { combineReducers } from 'redux';
import { inviteReducer } from '../reducers/invite-reducer';

const rootReducer = combineReducers({
  invite: inviteReducer
});

export default rootReducer;
