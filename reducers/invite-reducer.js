import ActionTypes from '../constants/action_types';

export function inviteReducer(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetInviteRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetInviteRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting invite.',
      });
    }
    case ActionTypes.GetInviteFulfilled: {
      const { host, agenda, guests } = action.invite;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got invite.',
        host,
        agenda
      });
      newState.guests = [];
      if (guests) {
        newState.guests = Object.keys(guests).map(k => guests[k]);
      }
      return newState;
    }
    case ActionTypes.AddToInviteRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.AddToInviteRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding guest.',
      });
    }
    case ActionTypes.AddToInviteFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added guest.'
      });
      return newState;
    }
    case ActionTypes.GuestAdded: {
      const newState = Object.assign({}, state);
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }
    case ActionTypes.DeleteInviteFulfilled: {
        const newState = Object.assign({}, state);
        console.log("newState.guests: ", newState.guests);
        console.log("action.id: ", action.id);
        newState.guests.slice(action.id);
        return newState;
    }
    default:
      return state;
  }
}
