import axios from "axios";
import * as types from "./actionTypes";

const smurfApi = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  axios
    .get(smurfApi)
    .then(res => {
      dispatch({ type: types.GET_SMURFS, payload: res.data });
    })
    .catch(console.log);
};

export function updateInput(e) {
  let {name,value} = e.target;

  return {
    type: types.ON_INPUT_CHANGE,
    payload: { name, value }
  };
  
}

export const deleteSmurf = (id) => dispatch => {
  axios
    .delete(smurfApi+"/"+id)
    .then(res => {
      dispatch({type: types.DELETE_SMURF, payload: res.data})
    })
    .catch(console.log);
}

export const addSmurf = (smurf) => dispatch => {
  axios
    .post(smurfApi, smurf)
    .then(res => {
      dispatch({type: types.ADD_SMURF, payload: res.data})
      console.log(res.data);
    })
    .catch(console.log);
};
