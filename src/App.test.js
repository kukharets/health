import React from "react";
import { render, initialStore } from "setupTests";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { act } from "react-dom/test-utils";

import { INIT_HEALTH_APP, UPDATE_HEALTH_DATA } from "state/healthControl/actionTypes";

import { rootReducer } from "state/store";

import App from "App";

const middlewares = [ thunk ];
const createMockStore = configureMockStore(middlewares);
const createState = initialState => actions => actions.reduce(rootReducer, initialState);

describe("App basic data setup flow", () => {
  it("App run initial actions", async () => {
    const initialState = createState(initialStore);
    const store = createMockStore(initialState);
    act(() => {
      render(<App/>, { store });
    });
    const expectedActions = [
      INIT_HEALTH_APP,
    ];

    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual(expectedActions);
  });
  it("App get data updates actions", async () => {
    jest.useFakeTimers();
    const initialState = createState(initialStore);
    const store = createMockStore(initialState);
    act(() => {
      render(<App/>, { store });
    });
    jest.advanceTimersByTime(5000);

    const actualActions = store.getActions().filter(action => action.type === UPDATE_HEALTH_DATA);
    expect(actualActions.length).toBeGreaterThan(2);
  });
});
