import '@testing-library/jest-dom/extend-expect';
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "state/store";
import {healthDataReducerInitialState} from "state/healthControl/reducer";

Enzyme.configure({ adapter: new Adapter() });

function render(
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

const initialStore = {
    healthDataReducer: healthDataReducerInitialState
};

export { render, initialStore };