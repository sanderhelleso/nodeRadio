import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import infoReducer from "./infoReducer";
import linkReducer from "./linkReducer";

export default combineReducers({
    genre: genreReducer,
    info: infoReducer,
    link: linkReducer
});