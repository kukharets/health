import * as types from "./actionTypes";
import MyEventEmitter from "utils/EventEmitter";
import setupEventEmit from "utils/setupEventEmit";
import {dataFields} from "consts";
import {healthDataReducerInitialState} from "state/healthControl/reducer";

const initHealthApp = () => ({
    type: types.INIT_HEALTH_APP,
});

const updateHealthData = payload => ({
    type: types.UPDATE_HEALTH_DATA,
    payload,
});

export const actionInitHealthApp = () => dispatch => {
    dispatch(initHealthApp());
    const emitter = new MyEventEmitter();
    let currentData = {...healthDataReducerInitialState};
    let newData = {...healthDataReducerInitialState}
    dataFields.forEach(dataField => {
        emitter.on([dataField], data => {
            newData[dataField] = data;
        });
        setupEventEmit([dataField], emitter);
    })

    setInterval(() => {
        Object.keys(newData).forEach(key => {
                if (newData[key] === currentData[key]) {
                    newData[key] = "N/A"
                }
            }
        )
    }, 1000);

    setInterval(() => {
        let shouldUpdateStore = true;
        Object.keys(newData).forEach(key => {
                if (newData[key] === currentData[key]) {
                    shouldUpdateStore = false;
                }
            }
        )
        if (shouldUpdateStore) {
            dispatch(updateHealthData(newData));
            currentData = {...newData};
        }
    }, 100);
};