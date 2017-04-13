import ActionTypes from '../constants/action_types';
import database from './database';

export function addToInvite(guest) {
    console.log("guest: ", guest);
  return dispatch => {
    dispatch(addToInviteRequestedAction());
    // const guestsRef = database.ref('/guests');
    // guestsRef.child('-KhS0WbBjul4qSEiushh').remove();
    const pushedRef = database.ref('/guests').push({
        name: guest.name,
        baseImg: guest.imgBase
    })
    .then(() => {
        // const key = pushedRef.key;
        // console.log(key);
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
