import ActionTypes from '../constants/action_types';
import database from './database';
import firebase from 'firebase';

export function addToInvite(guest) {
    return dispatch => {
        dispatch(addToInviteRequestedAction());
        const pushedRef = database.ref('/guests').push({
            name: guest.name,
            baseImg: guest.baseUrl
        })
        .then(() => {
            dispatch(addToInviteFulfilledAction({
                guest
            }));
        })
        .catch((error) => {
            dispatch(addToInviteRejectedAction());
        });
    }
}

function addToInviteRequestedAction() {
  return {
      type: ActionTypes.AddToInviteRequested
  };
}

function addToInviteRejectedAction() {
  return {
      type: ActionTypes.AddToInviteRejected
  }
}

function addToInviteFulfilledAction(guest) {
  return {
      type: ActionTypes.AddToInviteFulfilled,
      guest
  };
}
