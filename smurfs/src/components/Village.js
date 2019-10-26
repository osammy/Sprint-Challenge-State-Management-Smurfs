import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Smurf from "./Smurf";

// const mapStateToProps = state => state.smurfs;

export function Village({ smurfs }) {
  console.log(smurfs)
  return (
    <div>
      <div className="list">
        {smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(Village);
