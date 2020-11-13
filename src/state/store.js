import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import healthDataReducer from "./healthControl/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
    healthDataReducer
});
function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(logger, thunk)
        )
    );
}
const store = configureStore(window.REDUX_INITIAL_DATA);

export default store;
