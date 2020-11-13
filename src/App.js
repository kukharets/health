import React, { useEffect, useState, useRef } from "react";
import './App.css';
import {actionInitHealthApp} from "state/healthControl/actions";
import {connect} from "react-redux";
import HealthValue from "components/HealthValue";

function App({actionInitHealthApp, temperature, airPressure, humidity}) {
    useEffect(() => {
        actionInitHealthApp()
    }, []);

  return (
    <div className="app">
      <HealthValue text='temperature' value={temperature}/>
      <HealthValue text='air pressure' value={airPressure}/>
      <HealthValue text='humidity' value={humidity}/>
    </div>
  );
}

const mapStateToProps = ({ healthDataReducer}) => {
    const { temperature, airPressure, humidity } = healthDataReducer;
    return {
        temperature, airPressure, humidity
    };
};

export default connect(
    mapStateToProps,
    {
        actionInitHealthApp,
    }
)(App);
