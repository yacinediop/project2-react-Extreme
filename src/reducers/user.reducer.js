import {ADD_USER_LIKE,   GET_USER } from "../actions/user.action";
import Post from "../components/Post";

const initialState = {};

export default function UserReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USER:
        return action.payload;

        case ADD_USER_LIKE:
                    return {
                        ...state,
                        likes: action.payload.likes,
                  
                };
        default:
            return state;
  }
}
