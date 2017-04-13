import ActionTypes from '../constants/action_types';
import database from './database';

export function deleteInvite(id) {
  return dispatch => {
    dispatch(deleteInviteRequestedAction());
    const guestsRef = database.ref('/guests');
    guestsRef.child(id).remove()
    .then(() => {
      dispatch(deleteInviteFulfilledAction({ id }));
    })
    .catch((error) => {
      dispatch(deleteInviteRejectedAction());
    });
  }
}

function deleteInviteRequestedAction() {
  return {
    type: ActionTypes.DeleteInviteRequested
  };
}

function deleteInviteRejectedAction() {
  return {
    type: ActionTypes.DeleteInviteRejected
  }
}

function deleteInviteFulfilledAction(id) {
  return {
    type: ActionTypes.DeleteInviteFulfilled,
    id
  };
}
