import axios from "axios";
import { FETCH_SONG } from "./types";

export const fetchSong = category => async dispatch => {
    const res = await axios.get(`/api/${category}`);
    dispatch({ type: FETCH_SONG, payload: res.data });
};