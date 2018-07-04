import { FETCH_SONG } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_SONG:
            return action.payload;

        default: 
            return state;
    }
}