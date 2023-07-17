import { ADD_POST, EDIT_POST, DELETE_POST, ADD_POST_LIKE,  GET_POSTS } from "../actions/post.action";
import Post from "../components/Post";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;

            case ADD_POST:
            return [action.payload, ...state];

            case EDIT_POST:
                return state.map((Post) => {
                    if (Post.id === action.payload.id) {
                        return{
                            ...Post,
                            content: action.payload.content
                        };
                    } else return Post;
                });

                case DELETE_POST:
                    return state.filter((Post) => Post.id != action.payload);

                    case ADD_POST_LIKE:
                        return state.map((Post) => {
                            if (Post.id === action.payload.id) {
                                return{
                                    ...Post,
                                    likes: action.payload.likes,
                                };
                            } else return Post;
                        } );

                        
            default:
                return state;
    }
}