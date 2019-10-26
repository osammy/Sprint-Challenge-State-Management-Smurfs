import * as types from "./actionTypes";

const initState = [];
export function smurfReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SMURFS:
      return [ ...state, ...payload ];

    case types.ADD_SMURF:
      return payload;

    case types.DELETE_SMURF:
      return payload;

    default:
      return state;
  }
}

const initFormState = {
  name: "",
  age: "",
  height: ""
};
export function inputFormReducer(state = initFormState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ON_INPUT_CHANGE:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
}
