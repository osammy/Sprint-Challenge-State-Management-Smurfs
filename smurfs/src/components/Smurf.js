import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Smurf({ smurf, deleteSmurf }) {
  return (
    <div className="content">
      <img src="Smurf.png" />
      <h3>Name: {smurf.name}</h3>
      <h3>Age: {smurf.age}</h3>
      <h3>Height: {smurf.height}</h3>
      <button onClick={()=>deleteSmurf(smurf.id)} >Delete</button>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(Smurf);
