import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import AddSmurf from "./AddSmurf";
import Village from "./Village";


export function App({ getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  return (
    <div>
      <AddSmurf />
      <Village />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
