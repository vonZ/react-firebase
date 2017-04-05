import { combineReducers } from 'redux';
import { inviteReducer } from '../Reducers/invite-reducer';

const rootReducer = combineReducers({
  invite: inviteReducer
});

export default rootReducer;
