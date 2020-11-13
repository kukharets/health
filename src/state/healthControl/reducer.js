import * as types from "./actionTypes";
import createReducer from "../createReducer";


export const healthDataReducerInitialState = {
    temperature: null,
    airPressure: null,
    humidity: null,
};

const healthDataReducer = createReducer(healthDataReducerInitialState)({
    [types.UPDATE_HEALTH_DATA]: (state, {payload}) => {
        return {...payload}
    },
});

export default healthDataReducer;
