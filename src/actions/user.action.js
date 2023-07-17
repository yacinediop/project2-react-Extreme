import axios from "axios";
// import { ADD_USER_LIKE } from "./post.action";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";
export const getUser = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/user").then((res) => {
            dispatch({ type: GET_USER, payload: res.data[0] });
        });
    };
}; 

export const addUserLike = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/user", data).then((res) => {
            dispatch({ type: ADD_USER_LIKE, payload: data});
        });
    };
};