import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* mySaga() {
  yield console.log("fire sage");
}

export default mySaga;
