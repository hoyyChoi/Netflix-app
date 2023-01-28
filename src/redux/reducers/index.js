import { combineReducers } from "redux";
import getDetailReducer from "./getDetailReducer";
import getmoviesReducer from "./getmovieReducer";
import getSearchReducer from "./getSearchReducer"

export default combineReducers({
    movie:getmoviesReducer,
    detail:getDetailReducer,
    search:getSearchReducer
})