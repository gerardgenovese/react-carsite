import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import { buildCarReducer } from "./buildCarReducer";
import { allCars } from "./buildCarReducer";
import pickColorReducer from "./pickColorReducer";
import pickEngineReducer from "./pickEngineReducer";
import slideShowReducer from "./slideShowReducer";

export default combineReducers({
  allCars: allCars,
  buildCar: buildCarReducer,
  pickColor: pickColorReducer,
  pickEngine: pickEngineReducer,
  slideShow: slideShowReducer
});