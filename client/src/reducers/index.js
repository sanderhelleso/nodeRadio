import { combineReducers } from "redux";
import genreReducer from "./genreReducer";

export default combineReducers({
    genre: genreReducer
});