import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const reHydrateStore = () => {
  if (localStorage.getItem("cars") !== null) {
    return {
      cars: JSON.parse(localStorage.getItem("cars"))
    };
  }
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    reHydrateStore(),
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
