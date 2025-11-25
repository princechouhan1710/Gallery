import { combineReducers } from "redux";
 
let initailstate = {
    products: [],
    users: [],
    username: "fvf"
}
 
 
let productReducer = (state = initailstate, actions) => {
    console.log("reducer called", actions)
    switch (actions.type) {
        case "ADDPRODUCT": return { ...state, products: [...state.products, actions.payload] }; break;
        case "DELETEPRODUCT": return {
            ...state, products: state.products.filter((v, i) => {
                return i !== actions.payload.id
            })
        }; break;
        case "ADDUSER": return { ...state, users: [...state.users, actions.payload] }; break;
        case "DELETEUSER": return {
            ...state, users: state.users.filter((v, i) => {
                return i !== actions.payload.id
            })
        }; break;
        default: return state;
    }
}
 
export let root = combineReducers({ productReducer })
 