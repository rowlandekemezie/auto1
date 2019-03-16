import { fork } from "redux-saga/effects";
import flatten from "lodash/flatten";

import carSagas from "./cars";
import colorSagas from "./colors";
import manufacturerSagas from "./manufacturers";

export default function* Root() {
  return flatten([
    yield fork(carSagas),
    yield fork(colorSagas),
    yield fork(manufacturerSagas)
  ]);
}
