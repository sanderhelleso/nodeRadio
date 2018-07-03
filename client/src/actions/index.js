import axios from "axios";
import { FETCH_SONG } from "./types";

// get request to /api/current_user
export const fetchSong = () => async dispatch => {
    const res = await axios.get("/api/*");
    dispatch({ type: FETCH_SONG, payload: res.data });
};