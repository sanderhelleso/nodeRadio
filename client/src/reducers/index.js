import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import infoReducer from "./infoReducer";

export default combineReducers({
    genre: genreReducer,
    info: infoReducer
});