import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import "./smurf.css";

export function AddSmurf({ formData, updateInput, addSmurf }) {
  // const onAddSmurf = (name, age, height) => {
  //   addSmurf(name, age, height);
  // };
  return (
    <div className="smurf-container">
      <div className="smurf-form">
        <h2>Add Smurf</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            addSmurf(formData);
          }}
        >
          <div>
            <input
              required
              placeholder="Name"
              value={formData.name}
              onChange={updateInput}
              name="name"
            />
          </div>
          <div>
            <input
              required
              placeholder="Height"
              value={formData.height}
              onChange={updateInput}
              name="height"
            />
          </div>
          <div>
            <input
              required
              placeholder="Age"
              type="number"
              value={formData.age}
              onChange={updateInput}
              name="age"
            />
          </div>
          <div>
            <button type="submit">Add Smurf</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(AddSmurf);
