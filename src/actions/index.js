// keys for actiontypes
// we have ActionType an object with keys.
// This is simply so we have constants so we
// don’t have to type in string identifiers.
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// increment just returns an INCREMENT action
export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

// decrement just returns a DECREMENT action
export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
