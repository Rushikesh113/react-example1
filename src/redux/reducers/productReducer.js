import {ActionTypes} from "../constants/action-types";

const initialState = {
    products: [
        {
        id:1,
        title: "Chandra",
        category: "Coder",
    }
    ],
}
export const productReducer = (state=initialState, {type, payload}) => { //destructuring the action into type and payload
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
                
        default:
            return state;
    }
}