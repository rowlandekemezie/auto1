import React from "react";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { carActions } from "../../redux/actions";

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

describe("Store", () => {
  it("should dispatch action to the api", () => {
    const store = mockStore({});
    const expectedValue = {
      type: "FETCH_ALL_CARS",
      query: "?page=5&sort=des"
    };
    store.dispatch(carActions.fetchAllCars("?page=5&sort=des"));
    expect(store.getActions()).toEqual([expectedValue]);
  });
});
