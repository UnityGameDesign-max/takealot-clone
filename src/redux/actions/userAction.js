import {actionTypes} from "../constants/actionTypes";

export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        payload: {user: user}
    }
}

export const removeUser = () => {
    return {
        type: actionTypes.REMOVE_USER,
    }
}