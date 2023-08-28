import { legacy_createStore as createStore, combineReducers } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";

const routeReducer = combineReducers({
  phoneReducer: phoneReducer,
  tvReducer: tvReducer,
});
const store = createStore(routeReducer);

export default store;
